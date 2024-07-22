import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UtilityService } from 'src/app/Services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  dealerObj: any;
  constructor(private authService:AuthService, private router: Router, private utilityService: UtilityService) { }

  activeItem: string = 'home';

  setActive(item: string) {
    this.activeItem = item;
  }

  checkIsLoggedIn() { 
    return this.utilityService.isLoggedIn();
  }

  getUsername() {
    this.dealerObj = this.utilityService.getDealerFromLocal();
    return this.dealerObj.username;
  }

  isAdmin() {
    this.dealerObj = this.utilityService.getDealerFromLocal();
    return this.dealerObj.isAdmin;
  }

  logoutDealer(){
    this.utilityService.logout();
    this.router.navigate(['/login']);
  } 
}
