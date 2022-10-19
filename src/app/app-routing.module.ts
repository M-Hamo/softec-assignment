import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout/layout.component";
import { NotFoundComponent } from "./pages/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "shop",
    pathMatch: "full",
  },
  {
    path: "shop",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "products",
        pathMatch: "full",
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
  public static Components = [AppComponent, LayoutComponent];
}
