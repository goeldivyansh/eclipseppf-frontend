import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
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


  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit()  {
    this.isDealerPresent = true;
    this.isEmpty = false;
    this.isInvalidRequest = false;
    this.response = '';

    if (!this.username) {
      this.isEmpty = true;
      console.log("Fields are empty.")
    } else {
      this.authService.getDealerDetails({username: this.username, token: this.authService.getDealerToken()}).subscribe(
        (resp: any) => {
          this.response = resp; 
          console.log("getDealerDetails resp: ", resp);
          // Show Modal containg user details.
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
}
