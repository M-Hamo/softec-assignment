import { Direction } from "@angular/cdk/bidi";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { BidirectionallyService } from "src/app/core/services/bidirectionally.service";
import {
  ButtonTypes,
  ButtonColors,
} from "src/app/shared/utils/button-properties";

@Component({
  selector: "pw-confirmation-dialog",
  templateUrl: "./confirmation-dialog.component.html",
  styleUrls: ["./confirmation-dialog.component.scss"],
})
export class ConfirmationDialogComponent {
  public constructor(
    private readonly _bidirectionally: BidirectionallyService,
    public readonly dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      message: string;
      ok: string;
      close: string;
    }
  ) {}

  public readonly direction$: Observable<Direction> =
    this._bidirectionally.direction$;

  public readonly ButtonTypes = ButtonTypes;
  public readonly ButtonColors = ButtonColors;
}
