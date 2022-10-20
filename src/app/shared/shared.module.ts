import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";
import { ButtonComponent } from "./components/button-action/button/button.component";
import { ShimmerLoadingComponent } from "./components/shimmer-loading/shimmer-loading.component";
import { TableComponent } from "./components/table/table.component";
import { AutofocusDirective } from "./directives/autofocus.directive";
import { BackButtonDirective } from "./directives/back-button.directive";

const DIRECTIVES = [BackButtonDirective, AutofocusDirective];

const PIPES: any[] = [];

const UI_COMPONENTS: any[] = [ButtonComponent];

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
