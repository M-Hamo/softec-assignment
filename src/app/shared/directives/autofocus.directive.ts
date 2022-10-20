import { Directive, OnInit } from "@angular/core";
import { MatInput } from "@angular/material/input";

@Directive({
  selector: "[matInputAutofocus]",
})
export class AutofocusDirective implements OnInit {
  public constructor(private readonly _matInput: MatInput) {}

  public ngOnInit() {
    setTimeout(() => this._matInput.focus(), 250);
  }
}
