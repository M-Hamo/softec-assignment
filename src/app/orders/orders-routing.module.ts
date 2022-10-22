import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateOrderComponent } from "./components/create-order/create-order.component";
import { OrderDetailsComponent } from "./components/order-details/order-details.component";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";
import { CreateOrderProductComponent } from "./ui/create-order-product/create-order-product.component";
import { OrderDetailComponent } from "./ui/order-detail/order-detail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: OrdersListComponent,
  },
  {
    path: ":id",
    component: OrderDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
  public static Components = [
    OrdersListComponent,
    OrderDetailsComponent,
    OrderDetailComponent,
    CreateOrderComponent,
    CreateOrderProductComponent,
  ];
}
