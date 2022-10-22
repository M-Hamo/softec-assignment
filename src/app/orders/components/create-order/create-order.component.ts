import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ICreateOrderFormGroup } from "../../utils/models/create-order-form-group.interface";
import { Observable, Subject } from "rxjs";
import { debounceTime, takeUntil, tap } from "rxjs/operators";
import { OrdersService } from "../../services/orders.service";
import { IUserVm } from "../../utils/models/user.interface";
import { ButtonColors, ButtonTypes } from "@shared/utils/button-properties";
import { IProduct } from "src/app/products/utils/models/product.interface";
import { ProductsService } from "src/app/products/services/products.service";
import { IOrderVm } from "../../utils/models/order.interface";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _toasterService: ToastrService,
    public readonly _dialogRef: MatDialogRef<CreateOrderComponent>,
    private readonly _ordersService: OrdersService,
    private readonly _productsService: ProductsService
  ) {}

  private readonly _destroyAll$ = new Subject<unknown>();

  public readonly selectedProducts$: Observable<IProduct[]> =
    this._productsService.selectedProducts$.pipe(
      tap((products: IProduct[]) => this._calculateOrderTotalPrice(products))
    );

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

  public selectedProductForCreateOrder: IProduct[] = [];

  public orderTotalPrice: number = 0;

  public submitLoading: boolean = false;

  private _searchInputChange: boolean = false;

  public ngOnInit(): void {
    this._searchUserHChangeHandler();
  }

  public onSubmitUpdate = (): void => {
    this.submitLoading = true;
    const { orderDate, paymentType, userId } = this.createOrderForm.value;

    const payload: IOrderVm = {
      OrderId: Math.floor(1000 + Math.random() * 9000),
      OrderDate: orderDate as string,
      PaymentType: paymentType as string,
      UserId: userId as string,
      Products: this.selectedProductForCreateOrder,
      TotalPrice: this.orderTotalPrice,
    };

    this._createOrderHandler(payload);
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

  /**
   *
   * @param products Selected products
   *  Calculate total price for order based on product quantity an prise
   */
  private _calculateOrderTotalPrice = (products: IProduct[]): void => {
    this.selectedProductForCreateOrder = [...products];
    setTimeout(() => {
      this.orderTotalPrice = products.reduce(
        (prevValue: number, current: IProduct) =>
          (current.Quantity as number) * current.ProductPrice + prevValue,
        0
      );
    });
  };

  // Separating this function for clean
  private _createOrderHandler = (order: IOrderVm): void => {
    setTimeout(() => {
      this._ordersService.createOrder(order);
      this._toasterService.success("Order created successfully.");
      this._router.navigateByUrl(`/shop/orders/${order.OrderId}`);
      this._productsService.resetSelectedProducts();
      this.submitLoading = false;
      this.closeHandler();
    }, 1000);
  };

  // Close modal
  public closeHandler = (res?: unknown): void => {
    this._dialogRef.close(res ?? null);
  };

  public ngOnDestroy(): void {
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  }
}
