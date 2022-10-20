import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { LayoutModule } from "./layout/layout.module";
import { NgxProgressBarModule } from "./ngx-progressbar.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppRoutingModule.Components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxProgressBarModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
