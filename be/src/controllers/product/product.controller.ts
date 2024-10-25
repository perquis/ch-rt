import { IProduct } from "@/interfaces/product";
import { middlewares } from "@/middlewares";
import { ProductModel } from "@/models/Product";
import { productFiltersSchema } from "@/validations/product.validation";
import express, { Request, Response } from "express";

const router = express.Router();

router.get(
  "/",
  middlewares.validateRequest(productFiltersSchema),
  middlewares.pagination(ProductModel),
  async (req: Request, res: Response) => {
    try {
      const {
        query: { sort, code, ...query },
      } = req;

      const { pagination } = req;

      let products = ProductModel.find({
        ...query,
        code: {
          $regex: new RegExp(code, "i"),
        },
      })
        .populate({
          path: "price",
          select: "-__v -createdAt -updatedAt",
          populate: {
            path: "installment",
            select: "-__v -createdAt -updatedAt",
          },
        })
        .select("-__v -createdAt -updatedAt")
        .skip(pagination!.skip)
        .limit(pagination!.limitNumber);

      if (sort === "capacity") {
        products = products.sort({ capacity: 1 });
      }

      const data = (await products.exec()) as unknown as IProduct[];

      if (sort === "price") {
        data.sort((a, b) => a.price.value - b.price.value);
      }

      res.send({
        ...pagination,
        data,
      });
    } catch (error) {
      if (res.headersSent) return;

      if (error instanceof Error) {
        res.status(500).send({
          message: error.message,
        });
      }

      res.status(500).send({
        message: "Internal server error",
      });
    }
  }
);

export { router as productController };
