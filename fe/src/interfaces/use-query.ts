import { IPagination } from 'interfaces/pagination';

export type IFetcher<T> = (queries?: object) => Promise<IPagination<T>>;

export type IUseAction<T> = {
  data: IPagination<T>;
  isLoading: boolean;
  isError: boolean;
};
