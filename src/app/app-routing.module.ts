import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LayoutContainerComponent } from "./layout/container/container.component";
import { NotFoundComponent } from "./pages/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "shop",
    pathMatch: "full",
  },
  {
    path: "shop",
    component: LayoutContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "products",
        pathMatch: "full",
      },
      {
        path: "products",
        loadChildren: () =>
          import("./products/products.module").then((m) => m.ProductsModule),
        title: "Products",
      },
      {
        path: "orders",
        loadChildren: () =>
          import("./orders/orders.module").then((m) => m.OrdersModule),
        title: "Orders",
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Not found page",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public static Components = [AppComponent];
}
