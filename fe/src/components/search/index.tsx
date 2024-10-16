import { ChangeEvent, useEffect, useState } from 'react';
import { useFilterContext } from '../../contexts/filters';

export const Search = () => {
  const { setQuery } = useFilterContext();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQuery(inputValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, 500]);

  return (
    <input
      type="search"
      placeholder={'Search'}
      value={inputValue}
      onChange={handleChange}
      className={'text-sm font-normal px-3 py-2 bg-white w-full'}
    />
  );
};
