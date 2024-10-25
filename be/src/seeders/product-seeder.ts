import products from "@/data/products.json";
import { InstallmentModel } from "@/models/Installment";
import { PriceModel } from "@/models/Price";
import { ProductModel } from "@/models/Product";

export const productSeeder = async () => {
  try {
    const anyProduct = await ProductModel.findOne();
    if (anyProduct) return;

    for (const {
      price: { installment, ...priceRest },
      ...product
    } of products) {
      const installmentItem = new InstallmentModel(installment),
        savedInstallment = await installmentItem.save();

      const price = new PriceModel({ ...priceRest, installment: savedInstallment._id }),
        savedPrice = await price.save();

      const newProduct = new ProductModel({ ...product, price: savedPrice._id });
      await newProduct.save();
    }

    console.log("The Products were seeded successfully");
  } catch (error) {
    console.error("Error while seeding product", error);
  }
};
