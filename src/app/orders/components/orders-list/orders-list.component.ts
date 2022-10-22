import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ParamsHelper } from "@shared/helpers/param-helper";
import { ButtonTypes } from "@shared/utils/button-properties";
import { from, Observable, ReplaySubject } from "rxjs";
import {
  debounceTime,
  finalize,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
  throttleTime,
} from "rxjs/operators";
import { OrdersService } from "../../services/orders.service";
import { IOrderVm } from "../../utils/models/order.interface";

@Component({
  selector: "app-orders-list",
  templateUrl: "./orders-list.component.html",
  styleUrls: ["./orders-list.component.scss"],
})
export class OrdersListComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _orderService: OrdersService
  ) {}

  // This ReplaySubject with fire in Destroy Component state
  // So use it to close all opened subscribers with takeUntil method
  private readonly _destroyAll$ = new ReplaySubject<unknown>(1);

  public searchInput: FormControl<number | null> = this._fb.control(null);

  public ordersList$: Observable<IOrderVm[]> =
    this._orderService.getFilteredOrders$.pipe(
      tap(() => setTimeout(() => (this.ordersLoaded = true), 500))
    );

  private readonly QUERY = {
    SEARCH: "search",
  };

  public readonly ButtonTypes = ButtonTypes;

  public ordersLoaded: boolean = false;

  public ngOnInit(): void {
    this._paramsChangeObserver();
    this._searchInputChangeObserver();
  }

  public onNavigateToDetails = (order: IOrderVm): void => {
    from(this._router.navigateByUrl(`/shop/orders/${order.OrderId}`))
      .pipe(take(1))
      .subscribe();
  };

  // This func watch the params changes
  private _paramsChangeObserver = (): void => {
    this._route.queryParamMap
      .pipe(
        tap((params: ParamMap) => {
          const queryParams = {
            search: ParamsHelper.number(params, this.QUERY.SEARCH) as number,
          };

          this.searchInput.patchValue(queryParams?.search);

          this._orderService.filterOrders.next(queryParams?.search);
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
        switchMap((val: number | null) =>
          from(
            this._router.navigate([], {
              queryParams: {
                [this.QUERY.SEARCH]: val || null,
              },
              queryParamsHandling: "merge",
            })
          ).pipe(tap(() => (this.ordersLoaded = false)))
        ),
        takeUntil(this._destroyAll$)
      )
      .subscribe();
  };

  public ngOnDestroy(): void {
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  }
}
