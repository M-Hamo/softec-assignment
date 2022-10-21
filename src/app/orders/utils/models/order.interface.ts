import { IProduct } from "src/app/products/utils/models/product.interface";

export interface IOrderVm {
  OrderDate: Date | string | null;
  OrderId: number;
  PaymentType: string;
  UserId: string;
  Products: (IOrderProduct | IProduct)[];
  TotalPrice?: number;
}

export interface IOrderProduct {
  ProductId: number;
  Quantity: number;
}
