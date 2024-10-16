export type EnergyClass = 'A' | 'B' | 'C';

export type Capacity = 8 | 9 | 10.5;

export type Features = 'Drzwi AddWash™' | 'Panel AI Control' | 'Silnik inwerterowy' | 'Wyświetlacz elektroniczny';

export interface IInstallment {
  value: number;
  period: number;
}

export interface IPrice {
  value: number;
  currency: string;
  installment: IInstallment;
  validFrom: Date;
  validTo: Date;
}

export interface IProduct {
  image: string;
  code: string;
  name: string;
  color: string;
  capacity: Capacity;
  dimensions: string;
  features: Features[];
  energyClass: EnergyClass;
  price: IPrice;
}

export type Sort = 'price' | 'capacity';

export interface IProductFilters {
  sort: Sort | '';
  capacity: Capacity | '';
  energyClass: EnergyClass | '';
  features: Features | '';
  code: string | '';
}
