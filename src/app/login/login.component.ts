import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 showSpinner: any;

  constructor(private loginService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  userName = "";
  password = "";

  showCorrectLogin = false;
  showInCorrectLogin = false;

  submit() {
    if (this.userName == 'arpit' && this.password == '1234') {
      this.showCorrectLogin = true;
      this.showInCorrectLogin = false;
      this.route.navigate(['/home']);
      this.loginService.login();
    }
    else {
      this.showCorrectLogin = false;
      this.showInCorrectLogin = true;
      this.loginService.logout();
    }
    this.clear();
  }

  clear() {
    this.userName = "";
    this.password = "";
  }

  logout() {
    this.showCorrectLogin = false;
    this.showInCorrectLogin = true;
    this.loginService.logout();
  }


}
