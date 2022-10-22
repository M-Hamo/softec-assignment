import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ICreateOrderFormGroup } from "../../utils/models/create-order-form-group.interface";
import { Observable, ReplaySubject } from "rxjs";
import { debounceTime, switchMap, takeUntil, tap } from "rxjs/operators";
import { OrdersService } from "../../services/orders.service";
import { IUserVm } from "../../utils/models/user.interface";
import { ButtonColors, ButtonTypes } from "@shared/utils/button-properties";
import { IProduct } from "src/app/products/utils/models/product.interface";
import { ProductsService } from "src/app/products/services/products.service";

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit {
  public constructor(
    private readonly _fb: FormBuilder,
    public readonly _dialogRef: MatDialogRef<CreateOrderComponent>,
    private readonly _ordersService: OrdersService,
    private readonly _productsService: ProductsService
  ) {}

  private readonly _destroyAll$ = new ReplaySubject<unknown>(1);

  public readonly selectedProducts$: Observable<IProduct[]> =
    this._productsService.selectedProducts$.pipe(tap(console.log));

  public createOrderForm: FormGroup<ICreateOrderFormGroup> = this._fb.group({
    orderDate: new FormControl<string | null>(new Date().toISOString()),
    paymentType: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: Validators.required,
    }),
    userId: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  public userSearchInput: FormControl<string | null> = new FormControl(null);

  public readonly ButtonTypes = ButtonTypes;
  public readonly ButtonColors = ButtonColors;

  public usersList: IUserVm[] = [];

  public submitLoading: boolean = false;

  private _searchInputChange: boolean = false;

  public ngOnInit(): void {
    this._searchUserHChangeHandler();
  }

  public onSubmitUpdate = (): void => {
    this.submitLoading = true;
    setTimeout(() => {
      this.cancelHandler({});
      this.submitLoading = false;
    }, 1000);
  };

  private _searchUserHChangeHandler = (): void => {
    if (!this._searchInputChange) this._getUsers(undefined, null);
    this.userSearchInput.valueChanges
      .pipe(
        debounceTime(400),
        tap((val: string | null) => this._getUsers(undefined, val)),
        takeUntil(this._destroyAll$)
      )
      .subscribe();
  };

  private _getUsers = (
    userId: string | undefined = undefined,
    searchKey: string | null = null
  ): void => {
    this._ordersService
      .getSearchedUser(userId, searchKey)
      .pipe(
        tap(
          (users: IUserVm | IUserVm[]) => (this.usersList = users as IUserVm[])
        ),
        takeUntil(this._destroyAll$)
      )
      .subscribe();
  };

  // Close modal
  public cancelHandler = (res?: unknown): void => {
    this._dialogRef.close(res ?? null);
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  };
}
