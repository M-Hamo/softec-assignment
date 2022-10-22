import { Component, Input, OnInit } from "@angular/core";
import { IDetailVm } from "../../utils/models/order-detail.interface";

@Component({
  selector: "order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.scss"],
})
export class OrderDetailComponent implements OnInit {
  public constructor() {}

  @Input() public readonly detail: IDetailVm | undefined;

  public ngOnInit(): void {}
}
