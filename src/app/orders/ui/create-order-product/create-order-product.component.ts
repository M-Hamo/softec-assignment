import { Component, Input, OnInit } from "@angular/core";
import { ButtonTypes, ButtonColors } from "@shared/utils/button-properties";
import { ProductsService } from "src/app/products/services/products.service";
import { IProduct } from "./../../../products/utils/models/product.interface";

@Component({
  selector: "create-order-product",
  templateUrl: "./create-order-product.component.html",
  styleUrls: ["./create-order-product.component.scss"],
})
export class CreateOrderProductComponent implements OnInit {
  public constructor(private readonly _productsService: ProductsService) {}

  private _product: IProduct = {} as IProduct;

  @Input() public set product(product: IProduct) {
    this._product = product;
    this.quantity = product?.Quantity as number;
  }

  public get product(): IProduct {
    return this._product;
  }

  public quantity: number = 1;

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;

  public ngOnInit(): void {}

  public onIncreaseQuantity = (): void => {
    if (this.product) {
      if (this.quantity <= this.product?.AvailablePieces) {
        this.quantity += 1;

        this._productsService.updateProduct({
          ...this.product,
          Quantity: this.quantity as number,
        });
      } else return;
    }
  };

  public onDecreaseQuantity = (): void => {
    if (this.product) {
      if (this.quantity > 1) {
        this.quantity -= 1;
        this._productsService.updateProduct({
          ...this.product,
          Quantity: this.quantity,
        });
      } else {
        this._productsService.updateProduct({
          ...this.product,
          selected: false,
          Quantity: undefined,
        });
      }
    }
  };
}
