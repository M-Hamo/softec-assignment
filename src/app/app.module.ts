import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxProgressBarModule } from "./ngx-progressbar.module";

@NgModule({
  declarations: [AppRoutingModule.Components],
  imports: [BrowserModule, AppRoutingModule, NgxProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
