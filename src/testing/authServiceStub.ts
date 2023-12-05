export class AuthServiceStub {
    isUserLoggedIn: boolean = false;
    login() {
        this.isUserLoggedIn = true;
    }
    isLoggedIn() {
        return this.isUserLoggedIn;
    }
}