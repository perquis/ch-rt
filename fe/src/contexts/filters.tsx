import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { IProductFilters } from '../interfaces/product';

export interface FiltersContextType {
  query: string;
  setQuery: (query: string) => void;
  filters: IProductFilters;
  setFilters: (filters: FiltersContextType['filters']) => void;
}

const FiltersContext = createContext<FiltersContextType>({
  query: '',
  setQuery: () => null,
  filters: {
    sort: '',
    capacity: '',
    energyClass: '',
    features: '',
  },
  setFilters: () => null,
});

export const FiltersProvider = ({ children }: PropsWithChildren) => {
  const [query, setQuery] = useState<FiltersContextType['query']>('');
  const [filters, setFilters] = useState<FiltersContextType['filters']>({
    sort: '',
    capacity: '',
    energyClass: '',
    features: '',
  });

  const value = useMemo(
    () => ({
      query,
      setQuery,
      filters,
      setFilters,
    }),
    [query, filters]
  );

  return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>;
};

export const useFilterContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
