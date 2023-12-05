import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logStatus = false;

  login(){
    this.logStatus = true;
  }

  logout(){
    this.logStatus = false;
  }

  isLoggedIn(){
    return this.logStatus;
  }
}
