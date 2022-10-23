import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";
import { ButtonComponent } from "./components/button-action/button/button.component";
import { ShimmerLoadingComponent } from "./components/shimmer-loading/shimmer-loading.component";
import { TableComponent } from "./components/table/table.component";
import { NoDataComponent } from "./components/no-data/no-data.component";

const DIRECTIVES: any[] = [];

const PIPES: any[] = [];

const UI_COMPONENTS: any[] = [ButtonComponent, NoDataComponent];

const THIRD_MODULES: any[] = [
  MaterialModule,
  TableComponent,
  ShimmerLoadingComponent,
];

const COMMON_MODULES: any[] = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...UI_COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...COMMON_MODULES, ...THIRD_MODULES],
  exports: [
    ...COMMON_MODULES,
    ...THIRD_MODULES,
    ...UI_COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
})
export class SharedModule {}
