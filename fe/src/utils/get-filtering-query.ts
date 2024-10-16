import { reduceToStringObject } from 'utils/reduce-to-string-object';

export const getFilteringQuery = (obj = {}): string => {
  const searchParams = new URLSearchParams(reduceToStringObject(obj));
  if (searchParams) return `?${searchParams.toString()}`;

  return '';
};
