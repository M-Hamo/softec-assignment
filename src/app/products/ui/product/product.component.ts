import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonTypes } from "@shared/utils/button-properties";
import { IProduct } from "../../utils/models/product.interface";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
  @Input() public readonly product: IProduct | undefined;

  @Input() public readonly productSelected: boolean | undefined;

  @Output() public readonly onEditProduct = new EventEmitter<IProduct>();

  public readonly ButtonTypes = ButtonTypes;
}
