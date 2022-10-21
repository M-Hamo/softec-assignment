import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { from, Observable, ReplaySubject } from "rxjs";
import { ProductsService } from "../../services/products.service";
import { IProduct } from "../../utils/models/product.interface";
import {
  concatMap,
  debounceTime,
  filter,
  switchMap,
  take,
  takeUntil,
  tap,
} from "rxjs/operators";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ParamsHelper } from "@shared/helpers/param-helper";
import { MatDialog } from "@angular/material/dialog";
import { BreakpointObserverService } from "@shared/services/breakpoint-observer.service";
import { Breakpoints } from "@angular/cdk/layout";
import { ModalPercentageSize } from "@shared/utils/enum/modal-size-enum";
import { EditProductQuantityComponent } from "../../ui/edit-product-quantity/edit-product-quantity.component";
import { ConfirmationDialogService } from "@shared/components/confirmation-dialog";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _dialog: MatDialog,
    private readonly _confirmService: ConfirmationDialogService,
    private readonly _breakpointObserver: BreakpointObserverService,
    private readonly _productsService: ProductsService
  ) {}

  // This ReplaySubject with fire in Destroy Component state
  // So use it to close all opened subscribers with takeUntil method
  private readonly _destroyAll$ = new ReplaySubject<unknown>(1);

  public readonly products$: Observable<IProduct[]> =
    this._productsService.getFilteredProducts$;

  public readonly selectedProducts$: Observable<IProduct[]> =
    this._productsService.selectedProducts$;

  public searchInput: FormControl<string | null> = this._fb.control(null);

  private readonly QUERY = {
    SEARCH: "search",
  };

  public screenSize: string = "";

  public ngOnInit(): void {
    this._screenSizeHandler();
    this._paramsChangeObserver();
    this._searchInputChangeObserver();
  }

  public onSelectProduct = (product: IProduct): void => {
    this._productsService.updateProduct({
      ...product,
      selected: !product?.selected,
    });
  };

  // Edit Product quantity
  public onEditProductQuantity = (prod: IProduct): void => {
    const dialogRef = this._dialog.open(EditProductQuantityComponent, {
      width:
        this.screenSize === Breakpoints.Small ||
        this.screenSize === Breakpoints.XSmall
          ? ModalPercentageSize.FULL
          : ModalPercentageSize.SMALL,
      hasBackdrop: true,
      disableClose: true,
      closeOnNavigation: true,
      restoreFocus: false,
      data: { product: prod },
    });

    dialogRef
      .afterClosed()
      .pipe(
        take(1),
        filter((res: IProduct) => !!res),
        concatMap((newProd: IProduct) =>
          this._confirmService
            .Confirm(
              `Are you sure to change ${newProd.ProductName} quantity `,
              "Are you sure ?",
              "Update",
              "cancel"
            )
            .pipe(
              tap((res: boolean) => {
                if (res) this._productsService.updateProduct(newProd);
              })
            )
        )
      )
      .subscribe();
  };

  // This func watch the params changes
  private _paramsChangeObserver = (): void => {
    this._route.queryParamMap
      .pipe(
        tap((params: ParamMap) => {
          const queryParams = {
            search: ParamsHelper.search(params, this.QUERY.SEARCH) as string,
          };

          this.searchInput.patchValue(queryParams?.search);

          this._productsService.filterProducts.next(queryParams?.search);
        }),
        takeUntil(this._destroyAll$)
      )
      .subscribe();
  };

  // This func detect search input changes and store in in query params in URL
  private _searchInputChangeObserver = (): void => {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((val: string | null) =>
          from(
            this._router.navigate([], {
              queryParams: {
                [this.QUERY.SEARCH]: val || null,
              },
              queryParamsHandling: "merge",
            })
          )
        ),

        takeUntil(this._destroyAll$)
      )
      .subscribe();
  };

  // This function detect screen size
  private _screenSizeHandler = (): void => {
    this._breakpointObserver.currentBreakpoint$
      .pipe(
        tap((val: string) => (this.screenSize = val)),
        takeUntil(this._destroyAll$)
      )
      .subscribe();
  };

  public ngOnDestroy(): void {
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  }
}
