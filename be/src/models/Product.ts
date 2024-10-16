import { IProduct } from '@/interfaces/product';
import mongoose from 'mongoose';

export const Product = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    energyClass: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Price',
    },
  },
  { timestamps: true },
);

export const ProductModel = mongoose.model('Product', Product);
