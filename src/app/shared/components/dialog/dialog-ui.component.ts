import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  ElementRef,
} from "@angular/core";

import {
  ButtonColors,
  ButtonTypes,
} from "src/app/shared/utils/button-properties";
import { SharedModule } from "./../../shared.module";

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: "app-dialog",
  templateUrl: "./dialog-ui.component.html",
  styleUrls: ["./dialog-ui.component.scss"],
})
export class DialogComponent {
  @ContentChild("headerContent") public headerContent?: ElementRef<null>;

  @ContentChild("footerContent") public footerContent?: ElementRef<null>;

  @Input() public title?: string;

  @Input() public titleIcon?: string;

  @Input() public submitBtnText = "save";

  @Input() public deleteBtnText?: string;

  @Input() public cancelBtnText?: string;

  @Input() public cancelBtnIcon?: string;

  @Input() public isLoading = false;

  @Input() public cancelBtnColor: ButtonColors = ButtonColors.warn;

  @Input() public isValid = true;

  @Input() public hasToolbar = true;

  @Input() public hideSaveButton = false;

  @Input() public contentScroll = false;

  @Input() public isTranslated = true;

  @Output() public readonly closeDialog = new EventEmitter();

  @Output() public readonly submitDialog = new EventEmitter();

  @Output() public readonly cancelDialog = new EventEmitter();

  @Output() public readonly deletePage = new EventEmitter();

  public buttonTypes = ButtonTypes;

  public buttonColors = ButtonColors;
}
