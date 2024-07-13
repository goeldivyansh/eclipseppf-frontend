import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  isLogIn: any | false;
  dealerObj: any;
  // userId: string;
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    // NavbarComponent.loggedIn = this.authService.isLoggedIn();
    this.isLogIn = this.authService.isLoggedIn();
    console.log("ngOnInit | this.isLogIn", this.isLogIn);
  }

  checkIsLoggedIn() { 
    return this.authService.isLoggedIn();
  }

  getUsername() {
    this.dealerObj = this.authService.getDealerFromLocal();
    return this.dealerObj.username;
  }

  isAdmin() {
    this.dealerObj = this.authService.getDealerFromLocal();
    return this.dealerObj.isAdmin;
  }

  logoutDealer(){
    this.authService.logout();
    // NavbarComponent.loggedIn = false'
    this.isLogIn = false
     //Route to dashboard page 
    this.router.navigate(['/']);
  } 

  toggleSidenav() {
    // Toggle sidenav open/close state
    // Example: using Angular Material's ViewChild
    // import { ViewChild } from '@angular/core';
    // import { MatSidenav } from '@angular/material/sidenav';
    // @ViewChild('sidenav') sidenav: MatSidenav;
    // this.sidenav.toggle();
  }
}
