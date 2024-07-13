import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
// import { globals } from '../../../globals';
// import { globals } from '../../../globalsJSON.json';
// require('dotenv').config();

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
  isAuthorized: any | true;
  isUserPresent: any | true;
  // response: any | undefined;
  isInvalidRequest: any | false;

  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit()  {
    this.isEmpty = false;
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
      this.authService.dealerLogin(this.credentials).subscribe(
        (response: any) => {
          console.log("Login Response: ", response);

          this.isAuthorized = true;

          // Store user in local storage & naviagate to dashboard
          if (response.username === this.ADMIN_USERNAME) {
            response.isAdmin = true;
            this.authService.storeDealerDetails(response);
            this.router.navigate(['/admin-dashboard']);
          } else {
            this.authService.storeDealerDetails(response);
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          console.log("Login Error: ", error);
          if (error.status === 404) {
            this.isUserPresent = false;
          } else if (error.status === 401) {
            this.isAuthorized = false;
          } else {
            this.isInvalidRequest = true;
          }
        }
      );
    }
  }
}
