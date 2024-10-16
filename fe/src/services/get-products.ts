import { IPagination } from 'interfaces/pagination';
import { IProduct } from 'interfaces/product';
import { getFilteringQuery } from 'utils/get-filtering-query';

export const getProducts = async (queries?: object): Promise<IPagination<IProduct>> => {
  const res = await fetch(`/api/v1/products${getFilteringQuery(queries)}`);
  return res.json();
};
