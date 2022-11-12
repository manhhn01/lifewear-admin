import { BaseModel } from './';

export interface Product extends BaseModel {
  name: string;
  slug: string;
  price: number;
  sale_price: number;
  cover: string;
  status: boolean;
  wished?: boolean;
  rating_avg: number;
  options: any[];
  variants: any[];
}
