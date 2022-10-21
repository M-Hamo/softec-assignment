import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { EditProductQuantityComponent } from "./ui/edit-product-quantity/edit-product-quantity.component";
import { ProductComponent } from "./ui/product/product.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: ProductListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
  public static Components = [
    ProductListComponent,
    ProductComponent,
    EditProductQuantityComponent,
  ];
}
