import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';

@Component({
  selector: 'app-dealer-info',
  templateUrl: './dealer-info.component.html',
  styleUrls: ['./dealer-info.component.css']
})
export class DealerInfoComponent {

  dealerObj: any | {};
  

  constructor(private authService: AuthService, private utilityService: UtilityService,) {
    this.dealerObj = this.utilityService.getDealerFromLocal();
    this.dealerObj.created = this.utilityService.epochToDate(this.dealerObj.created);
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
