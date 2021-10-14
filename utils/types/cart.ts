import { T_Product } from './product';

export type T_Cart = {
  products: T_Product[];
  grandTotal: number;
};
