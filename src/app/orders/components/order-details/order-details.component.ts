import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OrdersService } from "../../services/orders.service";
import { Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { IOrderVm } from "./../../utils/models/order.interface";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"],
})
export class OrderDetailsComponent implements OnInit {
  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _ordersService: OrdersService
  ) {}

  public readonly orderDetails$: Observable<IOrderVm> = this._route.params.pipe(
    switchMap((params: Params) =>
      this._ordersService.getOrderById(+params["id"])
    )
  );

  public ngOnInit(): void {
    this.orderDetails$.subscribe(console.log);
  }
}
