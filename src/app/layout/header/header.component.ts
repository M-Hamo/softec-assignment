import { Component, OnInit } from "@angular/core";
import { ButtonTypes } from "@shared/utils/button-properties";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public constructor() {}

  public readonly ButtonTypes = ButtonTypes;

  public showMenuList: boolean = false;

  public ngOnInit(): void {}

  // Toggle Menu list
  public onToggleMeneList = (): void => {
    this.showMenuList = !this.showMenuList;
  };
}
