import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from "@angular/router";

const Components = [LayoutComponent];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, RouterModule],
  exports: [...Components],
})
export class LayoutModule {}
