import { IPagination } from '@/interfaces/pagination';
import { IProductFilters } from '@/interfaces/product';
import 'express';

declare module 'express' {
  interface Request {
    pagination?: {
      currentPage: number;
      limitNumber: number;
      skip: number;
      next: string | null;
      prev: string | null;
      quantity: number;
      totalPages: number;
    };
    query: IProductFilters & IPagination;
  }
}
