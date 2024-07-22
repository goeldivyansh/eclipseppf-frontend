import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  ADMIN_USERNAME = 'ADMIN';
  credentials = {
    username: '',
    password: ''
  };

  isEmpty: any | false;
  isAuthenticated: any | true;
  isAuthorized: any | true;
  isUserPresent: any | true;
  // response: any | undefined;
  isInvalidRequest: any | false;

  constructor(private authService: AuthService, private router: Router, private utilityService: UtilityService) {
    if (this.utilityService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
  
  onSubmit()  {
    this.isEmpty = false;
    this.isAuthenticated = true;
    this.isAuthorized = true;
    this.isUserPresent = true;
    this.isInvalidRequest = false;

    if (this.credentials.username === '' || this.credentials.password === '') {
      this.isEmpty = true;
      console.log("Input fields are empty")
    }
    else {
      console.log('Login clicked:', this.credentials);

      this.isEmpty = false;

      // Send login request
      this.authService.loginDealer(this.credentials).subscribe(
        (response: any) => {
          console.log("Login Response: ", response);

          this.isAuthenticated = true;

          // Store user in local storage & naviagate to dashboard
          if (response.username === this.ADMIN_USERNAME) { response.isAdmin = true; }
          this.utilityService.storeDealerDetailsInLocal(response);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log("Login Error: ", error);
          if (error.status === 404) {
            this.isUserPresent = false;
          } else if (error.status === 401) {
            this.isAuthenticated = false;
          } else if (error.status === 403) {
            this.isAuthorized = false;
          } else {
            this.isInvalidRequest = true;
          }
        }
      );
    }
  }
}
