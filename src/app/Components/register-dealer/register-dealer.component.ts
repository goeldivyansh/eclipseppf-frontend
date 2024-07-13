import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

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
    mobile_no: '',
    email: ''
  };
  isEmpty: any | false;
  isInvalid: any | false;
  isAlreadyPresent: any | false;
  response: any | undefined;

  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit()  {
    this.isInvalid = false;
    this.isAlreadyPresent = false;
    this.isEmpty = this.inputValidation(this.dealerInfo);

    if (this.isEmpty) {
      this.isEmpty = true;
      console.log("Fields are empty")
    } else {
      this.authService.registerDealer({dealerInfo: this.dealerInfo, token: this.authService.getDealerToken()}).subscribe(
        (resp: any) => {
          this.response = resp;
          console.log('registerDealer Response', resp);
          console.log('registerDealer this.response', this.response);
          this.isAlreadyPresent = false;
          this.isInvalid = false;

          // Show popup user registered successfully
          
        },
        (error: any) => {
          console.log("registerDealer Error: ", error);
          if (error.status === 406) {
            this.isAlreadyPresent = true; //todo decide on errcode.
          } else {
            this.isInvalid = true;
          }
        }
      );
    }

  }
  inputValidation(obj: any) {
    console.log(obj);
    if (
      obj.name === '' ||
      obj.username === '' ||
      obj.password === '' ||
      obj.address === '' ||
      obj.mobile_no === '' ||
      obj.email === ''
    ) {
      return true;
    }
    return false;
  };
}
