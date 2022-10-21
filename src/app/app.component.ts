import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { NavigationEnd, Router } from "@angular/router";
import { AppSplashScreenService } from "@shared/services/splash-screen.service";
import { ReplaySubject } from "rxjs";
import { filter, takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  template: `<ng-progress></ng-progress>
    <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly _router: Router,
    private readonly _splashScreen: AppSplashScreenService,
    private readonly _iconRegistry: MatIconRegistry
  ) {
    // Change material icons theme
    this._iconRegistry.setDefaultFontSetClass("material-icons-round");
  }

  private readonly _destroyAll$ = new ReplaySubject<unknown>(1);

  public ngOnInit(): void {
    this._routerObserver();
  }

  // Watch router status
  private _routerObserver = (): void => {
    this._router.events
      .pipe(
        tap((event) => {
          if (event instanceof NavigationEnd) {
            window.scrollTo(0, 0);
            this._splashScreen.hide();
          }
        }),
        //Close subscription when component destroy
        takeUntil(this._destroyAll$)
      )
      .subscribe();
  };

  public ngOnDestroy(): void {
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  }
}
