import { routes } from "src/app/app-routing.module";
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';

import { RouterService } from 'src/app/services/router.service';
import { LoginComponent } from "src/app/login/login.component";
import { HeaderComponent } from "src/app/header/header.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "src/app/navbar/navbar.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('RouterService', () => {
  let routerService: RouterService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatToolbarModule,
        NoopAnimationsModule
      ],
      declarations: [AppComponent, LoginComponent, NavbarComponent],
      teardown: { destroyAfterEach: false },
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    routerService = TestBed.inject(RouterService);
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('should be created', () => {
    expect(routerService).toBeTruthy();
  });

  it('should contain `navigateToLoginView()` method which navigates to login view when called', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    routerService.navigateToLoginView();
    tick();
    expect((fixture.nativeElement as HTMLElement).innerHTML).toContain("app-login");
  }));
});
