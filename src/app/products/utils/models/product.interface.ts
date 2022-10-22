export interface IProduct {
  ProductId: number;
  AvailablePieces: number;
  ProductImg: string;
  ProductName: string;
  ProductPrice: number;
  Quantity?: number | undefined;
  selected?: boolean;
}
