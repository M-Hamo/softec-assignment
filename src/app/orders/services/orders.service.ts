import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { ProductsService } from "src/app/products/services/products.service";
import { IOrderProduct, IOrderVm } from "../utils/models/order.interface";
import { IProduct } from "./../../products/utils/models/product.interface";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  public constructor(
    private readonly _http: HttpClient,
    private readonly _productsService: ProductsService
  ) {
    this._storOrders();
  }

  // Products Store
  private readonly _ordersStore: BehaviorSubject<IOrderVm[]> =
    new BehaviorSubject<IOrderVm[]>([]);

  // Search key store
  public readonly filterOrders = new BehaviorSubject<number | null>(null);

  private readonly _filterOrders$: Observable<number | null> =
    this.filterOrders.asObservable();

  public readonly ordersStore$: Observable<IOrderVm[]> =
    this._ordersStore.asObservable();

  // Get the specific order by order id
  public getOrderById = (orderId: number): Observable<IOrderVm | undefined> => {
    return this.ordersStore$.pipe(
      map((orders: IOrderVm[]) =>
        orders.find((o: IOrderVm) => o?.OrderId === orderId)
      )
    );
  };

  // Filter Orders with search store => filterOrders
  public getFilteredOrders$: Observable<IOrderVm[]> = combineLatest([
    this._filterOrders$,
    this.ordersStore$,
  ]).pipe(
    map(([filterWard, allOrders]) =>
      filterWard === null
        ? allOrders
        : allOrders.filter((prod: IOrderVm) =>
            prod.OrderId.toString()?.includes(filterWard.toString())
          )
    )
  );

  // This func responsible for storing Orders to make changes with data
  // Take(1) => Store it once i Inject the service
  private _storOrders = (): void => {
    combineLatest([this._getOrders$, this._productsService.productStore$])
      .pipe(
        take(1),
        tap(([orders, products]) =>
          this._mergeProductsToOrders(orders, products)
        )
      )
      .subscribe();
  };

  // This func just find products for each order and calculate total price for it
  // Then store the final results in order store to render in the list
  private _mergeProductsToOrders = (
    orders: IOrderVm[],
    products: IProduct[]
  ): void => {
    const newList: IOrderVm[] = orders.map((order: IOrderVm) => {
      const prods: IProduct[] = products.filter((prod: IProduct) =>
        order?.Products?.some(
          (o: IOrderProduct | IProduct) =>
            (o as IOrderProduct)?.ProductId === prod?.ProductId
        )
      );

      return {
        ...order,
        Products: prods,
        TotalPrice: this._calculateTotalPrice(prods),
      };
    });

    this._ordersStore.next(newList);
  };

  // Calculate Total price for every order
  private _calculateTotalPrice = (prods: IProduct[]): number =>
    prods.reduce(
      (prevValue: number, current: IProduct) =>
        prevValue + current?.ProductPrice,
      0
    );

  // Get all Orders
  private _getOrders$: Observable<IOrderVm[]> = this._http.get<IOrderVm[]>(
    "assets/data-source/orders.json"
  );

  // Get all Users
  private _getUsers$: Observable<unknown> = this._http.get<unknown>(
    "assets/data-source/users.json"
  );
}