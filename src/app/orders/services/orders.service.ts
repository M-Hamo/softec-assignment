import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { concatMap, filter, map, take, tap } from "rxjs/operators";
import { ProductsService } from "src/app/products/services/products.service";
import { IOrderVm } from "../utils/models/order.interface";
import { IUserVm } from "../utils/models/user.interface";
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

  /**
   * Filter Orders with search store => filterOrders
   */
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

  /**
   *
   * @param Order of type IOrderVm
   * Adding new order to orders store
   * Subtract the AvailablePieces from the quantity ordered for each product
   */
  public createOrder = (newOrder: IOrderVm): void => {
    if (newOrder) {
      newOrder.Products.forEach((prod: IProduct) => {
        this._productsService.updateProduct({
          ...prod,
          AvailablePieces: prod.AvailablePieces - (prod.Quantity as number),
          selected: false,
          Quantity: 1,
        });
      });

      this._ordersStore.next([newOrder, ...this._ordersStore.value]);
    }
  };

  /**
   *
   * @param orderId
   * @returns  Get the specific order by order id
   */
  public getOrderById = (orderId: number): Observable<IOrderVm> => {
    return this.ordersStore$.pipe(
      map(
        (orders: IOrderVm[]) =>
          orders.find((o: IOrderVm) => o?.OrderId === orderId) ??
          ({} as IOrderVm)
      ),
      filter((order: IOrderVm) => !!order?.OrderId),
      // Getting user by order UserId
      concatMap((order: IOrderVm) =>
        this._getUsers$.pipe(
          map((users: IUserVm[]) => ({
            ...order,
            User: users.find((user: IUserVm) => user?.Id === order?.UserId),
          }))
        )
      )
    );
  };

  /**
   *
   * @param payload
   * @returns  Observable<IUserVm> If we pass an Id
   * @returns  Observable<IUserVm[]> If we search for users by name
   */
  public getSearchedUser = (
    userId?: string | undefined,
    searchKey: string | null = null
  ): Observable<IUserVm | IUserVm[]> => {
    return this._getUsers$.pipe(
      map((users: IUserVm[]) => {
        if (userId) {
          return (
            users.find((user: IUserVm) => user?.Id === userId) ||
            ({} as IUserVm)
          );
        } else if (searchKey || searchKey === null) {
          return searchKey === null
            ? users
            : users.filter((user: IUserVm) =>
                user?.Name.toLowerCase().includes(
                  (searchKey as string)?.toLowerCase()
                )
              );
        }

        return [] as IUserVm[];
      })
    );
  };

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

  // This func just parse products for each order and calculate total price for it
  // Then store the final results in order store to render in the list
  private _mergeProductsToOrders = (
    orders: IOrderVm[],
    products: IProduct[]
  ): void => {
    const newList: IOrderVm[] = orders.map((order: IOrderVm) => {
      const prods: IProduct[] = [];

      order?.Products.forEach((o: IProduct) => {
        products.forEach((p: IProduct) => {
          if (o?.ProductId === p?.ProductId) {
            prods.push({ ...o, ...p } as IProduct);
          }
        });
      });

      return {
        ...order,
        Products: prods,
        TotalPrice: this._calculateTotalPrice(prods),
      };
    });

    this._ordersStore.next(newList);
  };

  /**
   *
   * @param prods Products array
   * @returns Calculate total price for all products are given
   */
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
  private _getUsers$: Observable<IUserVm[]> = this._http.get<IUserVm[]>(
    "assets/data-source/users.json"
  );
}
