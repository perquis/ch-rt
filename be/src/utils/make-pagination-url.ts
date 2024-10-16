import { IProductFilters } from '@/interfaces/product';
import { Request } from 'express';

export const makePaginationUrl = (req: Request, page: number | null, limit: number, query: Omit<IProductFilters, 'sort' | 'code'>) => {
  if (page === null) return null;

  const url = new URL(`${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}`);
  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  Object.entries(query).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value as string);
    }
  });

  return url.toString();
};
