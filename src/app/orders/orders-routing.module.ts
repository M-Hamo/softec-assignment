import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
  public static Components = [OrdersListComponent];
}
