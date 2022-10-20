import { Breakpoints } from "@angular/cdk/layout";
import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { ReplaySubject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { BreakpointObserverService } from "../services/breakpoint-observer.service";

@Directive({
  standalone: true,
  providers: [BreakpointObserverService],
  selector: "[smallScreen]",
})
export class SmallScreenDirectorDirective implements OnInit {
  public constructor(
    private readonly _templateRef: TemplateRef<any>,
    private readonly _viewContainerRef: ViewContainerRef,
    private readonly _breakpointObserver: BreakpointObserverService
  ) {
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }

  @Input("smallScreen") public isSmall?: boolean = true;

  @Input("smallScreenElse") public placeholder: TemplateRef<any> | null = null;

  private readonly _destroyAll$: ReplaySubject<unknown> =
    new ReplaySubject<unknown>(1);

  public readonly Breakpoints = Breakpoints;

  public ngOnInit(): void {
    this._screenSizeHandler();
  }

  private _screenSizeHandler = (): void => {
    this._breakpointObserver.currentBreakpoint$
      .pipe(
        tap((val: string) => {
          this._viewContainerRef.clear();
          if (this.isSmall) {
            if (val !== Breakpoints.Small && val !== Breakpoints.XSmall) {
              this.placeholder &&
                this._viewContainerRef.createEmbeddedView(this.placeholder);
            } else this._viewContainerRef.createEmbeddedView(this._templateRef);
          }
        }),
        takeUntil(this._destroyAll$)
      )
      .subscribe();
  };

  public ngOnDestroy(): void {
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  }
}
