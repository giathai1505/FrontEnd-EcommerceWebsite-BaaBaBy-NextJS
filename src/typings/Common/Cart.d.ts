import { IProductTemplate } from "@typings";

export type ICartItem = {
  _id?: string;
  name?: string;
  quantity: number;
  productTemplate?: IProductTemplate;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ICartLocalStorage = ICartItem[];
