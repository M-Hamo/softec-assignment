import { CommonModule } from "@angular/common";
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from "@angular/core";
import { ShimmerLoadingComponent } from "../shimmer-loading/shimmer-loading.component";

@Component({
  standalone: true,
  imports: [CommonModule, ShimmerLoadingComponent],
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() public readonly data!: any[];

  @Input() public readonly colSpanCount?: number;

  @Input() public readonly dataLoaded?: boolean;

  @Input() public readonly headerClass?: string;

  @Input() public readonly rowClass?: string;

  @Input() public readonly extendable?: boolean = false;

  @Input() public readonly extendableByDefault?: boolean;

  @Output() public readonly onRowClicked = new EventEmitter<any>();

  @ContentChild("headers") public readonly headers:
    | TemplateRef<any>
    | undefined;

  @ContentChild("rows") public readonly rows: TemplateRef<any> | undefined;

  @ContentChild("pagination") public readonly pagination:
    | TemplateRef<any>
    | undefined;

  @ContentChild("noData") public readonly noData: TemplateRef<any> | undefined;

  @ContentChild("extendableArea") public readonly extendableArea:
    | TemplateRef<any>
    | undefined;

  private _expandedRows: number[] = [];

  public get expandedRows(): number[] {
    return this._expandedRows;
  }

  public isExpanded = (i: number): boolean => {
    return this.expandedRows.includes(i);
  };

  public ngOnInit(): void {}

  public onExpandRow = (rowIndex: number, rowData?: any): void => {
    this.onRowClicked.emit(rowData);

    const index: number = this._expandedRows.findIndex(
      (i: number) => i === rowIndex
    );

    index >= 0
      ? this._expandedRows.splice(index, 1)
      : this._expandedRows.push(rowIndex);
  };
}
