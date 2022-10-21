import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { LayoutContainerComponent } from "./container/container.component";

const Components = [
  LayoutContainerComponent,
  HeaderComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [...Components],
})
export class LayoutModule {}
