import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-check-warranty',
  templateUrl: './check-warranty.component.html',
  styleUrls: ['./check-warranty.component.css']
})
export class CheckWarrantyComponent {
  roll_no: any | '';
  car_no: any | '';
  response: any | '';
  // isSingleFieldProvided: any | true;
  isEmpty: any | false;
  isInvalid: any | '';
  isNotPresent: any | false;
  dealerObj: any | {};

  constructor(private carsService: CarsService,private authService: AuthService, private router: Router) {}
  
  onSubmit()  {
    // this.isSingleFieldProvided = true;
    this.isEmpty = false;
    this.isInvalid = false;
    this.isNotPresent = false;
    this.response = '';

    if (!this.roll_no && !this.car_no) {
      this.isEmpty = true;
      console.log("Fields are empty.")
    // } else if (this.roll_no && this.car_no) {
    //   this.isSingleFieldProvided = false;
    //   console.log("Only one field should be provided.")
    } else {
      this.isEmpty = false;
      this.dealerObj = this.authService.getDealerFromLocal();

      this.carsService.getWarranty({
        roll_no: this.roll_no,
        car_no: this.car_no,
        username: this.dealerObj.username,
        token: this.dealerObj.token
      }).subscribe(
        (resp: any) => {
          this.response = resp; 
          console.log('this.response:', this.response);
          // Show Modal containg warranty details.
        },
        (error: any) => {
          console.log("getWarranty Error: ", error);
          if (error.status === 404) {
            this.isNotPresent = true;
          } else {
            this.isInvalid = true;
          }
        }
      );
    }
  }
  
}
