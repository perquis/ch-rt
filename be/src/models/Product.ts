import { Feature } from '@/enums/Feature';
import mongoose from 'mongoose';

export const Product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
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
      type: String,
      enum: [Feature.ADDWASH_DOOR, Feature.AI_CONTROL_PANEL, Feature.INVERTER_MOTOR, Feature.ELECTRONIC_DISPLAY],
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
