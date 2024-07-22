import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';
@Component({
  selector: 'app-get-dealer',
  templateUrl: './get-dealer.component.html',
  styleUrls: ['./get-dealer.component.css']
})
export class GetDealerComponent {
  username: any | '';

  response: any | '';
  isDealerPresent: any | true;
  isEmpty: any | false;
  isInvalidRequest: any | '';


  constructor(private authService: AuthService, private utilityService: UtilityService, private router: Router) {}
  
  onSubmit()  {
    this.isDealerPresent = true;
    this.isEmpty = false;
    this.isInvalidRequest = false;
    this.response = '';

    if (!this.username) {
      this.isEmpty = 'Username is empty. Please fill to continue.';
    } else {
      this.authService.getDealerDetails({username: this.username, token: this.utilityService.getDealerToken()}).subscribe(
        (resp: any) => {
          delete resp.modified;
          resp.joined_on = this.utilityService.epochToDate(resp.created);
          delete resp.created;

          this.response = resp; 
          console.log("getDealerDetails resp: ", resp);
        },
        (error: any) => {
          console.log("getDealer Error: ", error);
          if (error.status === 404) {
            this.isDealerPresent = false;
          } else {
            this.isInvalidRequest = true;
          }
        }
      );
    }
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
