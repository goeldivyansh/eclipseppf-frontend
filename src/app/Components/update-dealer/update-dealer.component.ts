import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';

@Component({
  selector: 'app-update-dealer',
  templateUrl: './update-dealer.component.html',
  styleUrls: ['./update-dealer.component.css']
})
export class UpdateDealerComponent {
  dealerInfo = {
    name: '',
    username: '',
    password: '',
    address: '',
    state: '',
    city: '', 
    pincode: '',
    mobile_no: '',
    email: '',
    active: ''
  };

  inValidMsg: any | '';
  isInvalidRequest: any | false;
  isDealerPresent: any | true;
  response: any | undefined;

  constructor(private authService: AuthService, private utilityService: UtilityService, private router: Router) {}
  
  onSubmit()  {
    this.isInvalidRequest = false;
    this.isDealerPresent = true;
    this.response = undefined;
    this.inValidMsg = this.inputValidation(this.dealerInfo);

    if (!this.inValidMsg) {
      console.log('updateDealer Response', this.response);
      this.authService.updateDealer({dealerInfo: this.dealerInfo, token: this.utilityService.getDealerToken()}).subscribe(
        (resp: any) => {
          this.response = resp;
          console.log('updateDealer Response', resp);
        },
        (error: any) => {
          console.log("registerDealer Error: ", error);
          if (error.status === 404) {
            this.isDealerPresent = false;
          } else {
            this.isInvalidRequest = true;
          }
        }
      );
    }

  }
  inputValidation(obj: any) {
    let msg = '';
    console.log(obj);
    if (obj.username === '') {
      msg = 'Username is empty. Please fill to continue.';
    } else if(obj.username.indexOf(' ') >= 0) {
      msg = 'Whitespace are not allowed in username';
    } else if(obj.password && obj.password.indexOf(' ') >= 0) {
      msg = 'Whitespace are not allowed in password';
    } else if(obj.mobile_no && !Number.isInteger(obj.mobile_no)) {
      msg = 'Invalid mobile no. Please enter valid mobile number.'
    } else if(obj.email && !this.validateEmail(obj.email)) {
      msg = 'Invalid email. Please enter correct email.'
    } else if (obj.name == '' && obj.password == '' && obj.address == '' &&
      obj.mobile_no == '' && obj.email == '' && obj.active == ''
    ) {
      msg = 'Any one field is mandatory'
    }
    return msg;
  };

  validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
}
