import { ProductModel } from '@/models/Product';
import express from 'express';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const products = await ProductModel.find().populate('price').populate('price.installment');
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { router as productController };
