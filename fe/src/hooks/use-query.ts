import { IPagination } from 'interfaces/pagination';
import { IFetcher, IUseAction } from 'interfaces/use-query';
import { useEffect, useState } from 'react';
import { initialData } from 'services/pagination';

export const useQuery = <T>(fetcher: IFetcher<T>, queries?: object): IUseAction<T> => {
  const [data, setData] = useState<IPagination<T>>(initialData);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetcher(queries)
      .then((res) => setData(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [queries]);

  return {
    data,
    isLoading,
    isError,
  };
};
