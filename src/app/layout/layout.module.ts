import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";

const Components = [LayoutComponent, HeaderComponent];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [...Components],
})
export class LayoutModule {}
