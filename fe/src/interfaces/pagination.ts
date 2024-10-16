export type IPagination<T> = {
  currentPage: number;
  limitNumber: number;
  quantity: number;
  totalPages: number;
  next: string;
  prev: string;
  skip: number;
  data: T[];
};
