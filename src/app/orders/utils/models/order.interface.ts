import { IProduct } from "src/app/products/utils/models/product.interface";
import { IUserVm } from "./user.interface";

export interface IOrderVm {
  OrderDate: Date | string | null;
  OrderId: number;
  PaymentType: string;
  UserId: string;
  Products: IProduct[];
  TotalPrice?: number | undefined;
  User?: IUserVm | undefined;
}
