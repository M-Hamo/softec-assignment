import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { NgxProgressBarModule } from "./ngx-progressbar.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppRoutingModule.Components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxProgressBarModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      easeTime: 700,
      positionClass: "toast-bottom-right",
    }),
    SharedModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
