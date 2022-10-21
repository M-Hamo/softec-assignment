import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { IProduct } from "../utils/models/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  public constructor(private readonly _http: HttpClient) {
    this._storProducts();
  }

  // Products Store
  private readonly _productsStore: BehaviorSubject<IProduct[]> =
    new BehaviorSubject<IProduct[]>([]);

  // Search key store
  public readonly filterProducts = new BehaviorSubject<string | null>(null);

  private readonly _productStore$: Observable<IProduct[]> =
    this._productsStore.asObservable();

  private readonly _filterProducts$: Observable<string | null> =
    this.filterProducts.asObservable();

  public readonly selectedProducts$: Observable<IProduct[]> =
    this._productStore$.pipe(
      map((prods: IProduct[]) =>
        prods.filter((prod: IProduct) => prod?.selected)
      )
    );

  // Filter products with search store => filterProducts
  public getFilteredProducts$: Observable<IProduct[]> = combineLatest([
    this._filterProducts$,
    this._productStore$,
  ]).pipe(
    map(([filterWard, allProds]) =>
      filterWard === null
        ? allProds
        : allProds.filter((prod: IProduct) =>
            prod.ProductName.toLowerCase()?.includes(filterWard.toLowerCase())
          )
    )
  );

  // This func responsible for updating the edited product in the storing products
  public updateProduct = (product: IProduct): void => {
    const newList: IProduct[] = this._productsStore.value;
    const prodIndex: number = this._productsStore.value.findIndex(
      (prod: IProduct) => prod?.ProductId === product?.ProductId
    );
    newList.splice(prodIndex, 1, { ...product });
    this._productsStore.next(newList);
  };

  // This func responsible for storing products to make changes with data
  // Take(1) => Store it once i Inject the service
  private _storProducts = (): void => {
    this._getProducts$
      .pipe(
        take(1),
        tap((prods: IProduct[]) => this._productsStore.next(prods))
      )
      .subscribe();
  };

  // Get all products
  private _getProducts$: Observable<IProduct[]> = this._http.get<IProduct[]>(
    "assets/data-source/products.json"
  );
}
