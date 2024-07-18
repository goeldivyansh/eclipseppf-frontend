import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';

@Component({
  selector: 'app-register-dealer',
  templateUrl: './register-dealer.component.html',
  styleUrls: ['./register-dealer.component.css']
})
export class RegisterDealerComponent {
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
    
  };
  isInvalidRequest: any | false;
  isAlreadyPresent: any | false;
  response: any | undefined;
  inValidMsg: any | '';

  constructor(private authService: AuthService, private utilityService: UtilityService) {}
  
  onSubmit()  {
    this.isInvalidRequest = false;
    this.isAlreadyPresent = false;
    this.response = undefined;
    this.inValidMsg = '';

    this.inValidMsg = this.inputValidation(this.dealerInfo);

    if (!this.inValidMsg) {
      this.authService.registerDealer({dealerInfo: this.dealerInfo, token: this.utilityService.getDealerToken()}).subscribe(
        (resp: any) => {
          this.response = resp;
          console.log('registerDealer response', this.response);
        },
        (error: any) => {
          console.log("registerDealer Error: ", error);
          if (error.status === 406) {
            this.isAlreadyPresent = true;
          } else {
            this.isInvalidRequest = true;
          }
        }
      );
    }
  }

  inputValidation(obj: any) {
    let msg = '';
    if (obj.username === '') {
      msg = 'Username is empty. Please fill to continue.';
    } else if(obj.username.indexOf(' ') >= 0) {
      msg = 'Whitespace are not allowed in username';
    } else if (obj.password === '') {
      msg = 'Password is empty. Please fill to continue.'
    // } else if(obj.password.match(/^ *$/) !== null) {
    } else if(obj.password.indexOf(' ') >= 0) {
      msg = 'Whitespace are not allowed in password';
    }  else if (obj.name === '') {
      msg = 'Name is empty. Please fill to continue.'
    }  else if (obj.address === '') {
      msg = 'Address is empty. Please fill to continue.'
    } else if (obj.state === '') {
      msg = 'State is empty. Please fill to continue.'
    } else if (obj.city === '') {
      msg = 'City is empty. Please fill to continue.'
    } else if (obj.pincode === '') {
      msg = 'Pincode is empty. Please fill to continue.'
    } else if(!Number.isInteger(obj.pincode)) {
      msg = 'Invalid pincode. Please enter valid pincode.'
    } else if (obj.mobile_no === '') {
      msg = 'Mobile number is empty. Please fill to continue.'
    } else if(!Number.isInteger(obj.mobile_no)) {
      msg = 'Invalid mobile no. Please enter valid mobile number.'
    } else if (obj.email === '') {
      msg = 'Email is empty. Please fill to continue.'
    } else if(!this.validateEmail(obj.email)) {
      msg = 'Invalid email. Please enter correct email.'
    }

    return msg;
  };
  
  validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
}
