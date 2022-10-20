import { Directive, HostListener } from "@angular/core";
import { NavigationService } from "../services/navigation.service";

@Directive({
  selector: "[backButton]",
})
export class BackButtonDirective {
  constructor(private readonly _navigation: NavigationService) {}

  @HostListener("click")
  onClick(): void {
    this._navigation.back();
  }
}
