import { IPrice } from '@/interfaces/product';
import mongoose from 'mongoose';

export const Price = new mongoose.Schema<IPrice>(
  {
    currency: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    validFrom: {
      type: Date,
      required: true,
    },
    validTo: {
      type: Date,
      required: true,
    },
    installment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Installment',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const PriceModel = mongoose.model('Price', Price);
