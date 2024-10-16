import { Button } from 'components/button';
import { ProductCard } from 'components/cards/Product';
import { FeedbackMessage } from 'components/feedback-message';
import { useFilterContext } from 'contexts/filters';
import { useQuery } from 'hooks/use-query';
import { IProduct } from 'interfaces/product';
import { useMemo } from 'react';
import { ChevronDown } from 'react-feather';
import { getProducts } from 'services/get-products';

export const Products = () => {
  const { filters, query } = useFilterContext();

  const queries = useMemo(
    () => ({
      ...filters,
      code: query,
    }),
    [filters, query]
  );

  const { data, isLoading, isError } = useQuery<IProduct>(getProducts, queries);

  const when = useMemo(
    () => ({
      isError: isError && !isLoading && data.data.length === 0,
      isLoading: isLoading && data.data.length === 0,
      isNoData: data.data.length === 0,
    }),
    [isError, isLoading, data.data.length]
  );

  if (when.isError)
    return (
      <FeedbackMessage status={'error'}>Wystąpił błąd podczas ładowania produktów</FeedbackMessage>
    );

  if (when.isLoading)
    return <FeedbackMessage status={'loading'}>Ładowanie produktów...</FeedbackMessage>;

  if (when.isNoData) {
    return <FeedbackMessage>Nie znaleziono produktów</FeedbackMessage>;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-5">
        {data.data.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button
          variant={'tertiary'}
          value={'Pokaż więcej'}
          icon={<ChevronDown />}
          onClick={() => console.log('some action')}
        />
      </div>
    </>
  );
};
