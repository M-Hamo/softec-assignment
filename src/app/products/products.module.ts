import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { SharedModule } from "@shared/shared.module";
import { MagicSearchInputComponent } from "@shared/components/magic-search-input/magic-search-input.component";
import { ShimmerLoadingComponent } from "@shared/components/shimmer-loading/shimmer-loading.component";
import { DialogComponent } from "@shared/components/dialog/dialog-ui.component";
import { ConfirmationDialogModule } from "@shared/components/confirmation-dialog";

@NgModule({
  declarations: [ProductsRoutingModule.Components],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MagicSearchInputComponent,
    ShimmerLoadingComponent,
    DialogComponent,
    ConfirmationDialogModule,
  ],
})
export class ProductsModule {}
