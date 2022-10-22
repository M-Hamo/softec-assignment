import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErrorInterceptorService } from "@shared/services/error-interceptor.service";
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
      easeTime: 800,
      positionClass: "toast-bottom-right",
    }),
    SharedModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
