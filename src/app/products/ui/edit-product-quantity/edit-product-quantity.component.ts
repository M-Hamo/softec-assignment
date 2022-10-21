import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IProduct } from "../../utils/models/product.interface";

@Component({
  selector: "app-edit-product-quantity",
  templateUrl: "./edit-product-quantity.component.html",
  styleUrls: ["./edit-product-quantity.component.scss"],
})
export class EditProductQuantityComponent implements OnInit {
  public constructor(
    @Inject(MAT_DIALOG_DATA)
    public readonly data: {
      product: IProduct;
    },
    public readonly _dialogRef: MatDialogRef<EditProductQuantityComponent>
  ) {}

  public quantityField: FormControl<number | null> = new FormControl<
    number | null
  >(null, {
    nonNullable: true,
    validators: Validators.required,
  });

  public submitLoading: boolean = false;

  public ngOnInit(): void {
    // Patching value to quantityField
    this.quantityField.patchValue(this.data.product?.AvailablePieces);
  }

  // Submit the new product with new quantity and close modal
  public onSubmitUpdate = (): void => {
    this.submitLoading = true;
    setTimeout(() => {
      this.quantityField.valid &&
        this._dialogRef.close({
          ...this.data.product,
          AvailablePieces: this.quantityField?.value,
        } as IProduct);

      this.submitLoading = false;
    }, 1000);
  };

  // Close modal
  public cancelHandler = (res?: unknown): void =>
    this._dialogRef.close(res ?? null);
}
