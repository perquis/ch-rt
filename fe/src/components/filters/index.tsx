import { PropsWithChildren } from 'react';
import { Dropdown, DropdownOption } from '../dropdown';
import { Search } from '../search';

const sortOptions: DropdownOption[] = [
  { name: 'price', title: 'Cena' },
  { name: 'capacity', title: 'Pojemność' },
];

const featuresOptions: DropdownOption[] = [
  { name: 'Panel AI Control' },
  { name: 'Silnik inwerterowy' },
  { name: 'Wyświetlacz elektroniczny' },
];

const energyClassOptions: DropdownOption[] = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];

const capacityOptions: DropdownOption[] = [{ name: 8 }, { name: 9 }, { name: 10.5 }];

export const Filters = () => {
  return (
    <div>
      <div className="mb-8 pt-6 flex max-w-xs mx-auto">
        <Search />
      </div>
      <div className="grid grid-cols-4 gap-x-3 mb-4">
        <div>
          <Label>Sortuj</Label>
          <Dropdown options={sortOptions} filter={'sort'} />
        </div>
        <div>
          <Label>Funkcje</Label>
          <Dropdown options={featuresOptions} filter={'feature'} />
        </div>
        <div>
          <Label>Klasa energetyczna</Label>
          <Dropdown options={energyClassOptions} filter={'energyClass'} />
        </div>
        <div>
          <Label>Pojemność</Label>
          <Dropdown options={capacityOptions} filter={'capacity'} />
        </div>
      </div>
    </div>
  );
};

const Label = ({ children }: PropsWithChildren) => (
  <div className="block text-sm font-bold text-black mb-2">{children}</div>
);
