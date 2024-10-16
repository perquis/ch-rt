import { IInstallment } from '@/interfaces/product';
import mongoose from 'mongoose';

export const Installment = new mongoose.Schema<IInstallment>(
  {
    value: {
      type: Number,
      required: true,
    },
    period: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const InstallmentModel = mongoose.model('Installment', Installment);
