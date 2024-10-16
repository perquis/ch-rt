import { controllers } from '@/controllers';
import express from 'express';

const router = express.Router();

router.use('/products', controllers.productController);

export { router as v1 };
