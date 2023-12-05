import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { AuthServiceStub } from './authServiceStub';
import { RouterService } from 'src/app/services/router.service';
import { RouterServiceStub } from './routerServiceStub';

describe('AuthGuard', () => {

    let authGuard: AuthGuard;
    let authService: AuthService;
    let routerService: RouterService;
    const activatedRouteSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    const routerStateSnapshot: RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                { provide: AuthService, useClass: AuthServiceStub },
                { provide: RouterService, useClass: RouterServiceStub }]
        });
        authGuard = TestBed.inject(AuthGuard);
        authService = TestBed.inject(AuthService);
        routerService = TestBed.inject(RouterService);
    });

    it('should create', () => {
        expect(authGuard).toBeTruthy();
    });

    it('should navigate to login view if user has not logged in', () => {
        const spy = spyOn(routerService, "navigateToLoginView")
        authService.isUserLoggedIn = false;
        const result = authGuard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
        expect(result).toBeFalse();
        expect(spy).toHaveBeenCalled();
    });
    it('should return true if user has logged in', () => {
        const spy = spyOn(routerService, "navigateToLoginView")
        authService.isUserLoggedIn = true;
        const result = authGuard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
        expect(spy).not.toHaveBeenCalled();
        expect(result).toBeTrue();
    });
});
