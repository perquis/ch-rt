import { productController } from '@/controllers/product.controller';
import express from 'express';

const router = express.Router();

router.use('/products', productController);

export { router as v1 };
