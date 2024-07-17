import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-dealer-info',
  templateUrl: './dealer-info.component.html',
  styleUrls: ['./dealer-info.component.css']
})
export class DealerInfoComponent {

  dealerObj: any | {};

  constructor(private authService: AuthService) {
    this.dealerObj = this.authService.getDealerFromLocal();
    delete this.dealerObj.created;
    delete this.dealerObj.modified;
    delete this.dealerObj.token;
    delete this.dealerObj.isAdmin;
    delete this.dealerObj.active;
    console.log('this.dealerObj: ', this.dealerObj);
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
