import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { OrdersRoutingModule } from "./orders-routing.module";
import { ConfirmationDialogModule } from "@shared/components/confirmation-dialog";
import { DialogComponent } from "@shared/components/dialog/dialog-ui.component";
import { MagicSearchInputComponent } from "@shared/components/magic-search-input/magic-search-input.component";
import { ShimmerLoadingComponent } from "@shared/components/shimmer-loading/shimmer-loading.component";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [OrdersRoutingModule.Components],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    MagicSearchInputComponent,
    ShimmerLoadingComponent,
    DialogComponent,
    ConfirmationDialogModule,
  ],
})
export class OrdersModule {}
