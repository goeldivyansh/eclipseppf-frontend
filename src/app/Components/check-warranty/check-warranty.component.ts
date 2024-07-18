import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';

@Component({
  selector: 'app-check-warranty',
  templateUrl: './check-warranty.component.html',
  styleUrls: ['./check-warranty.component.css']
})
export class CheckWarrantyComponent {
  roll_no: any | '';
  car_no: any | '';
  response: any | undefined;
  isEmpty: any | false;
  isInvalidRequest: any | '';
  isNotPresent: any | false;
  dealerObj: any | {};

  constructor(private carsService: CarsService,private authService: AuthService,
    private utilityService: UtilityService, private router: Router) {}
  
  onSubmit()  {
    this.isEmpty = false;
    this.isInvalidRequest = false;
    this.isNotPresent = false;
    this.response = undefined;

    if (!this.roll_no && !this.car_no) {
      this.isEmpty = true;
    }
    else {
      this.dealerObj = this.utilityService.getDealerFromLocal();

      this.carsService.getWarranty({
        roll_no: this.roll_no,
        car_no: this.car_no,
        username: this.dealerObj.username,
        token: this.dealerObj.token
      }).subscribe(
        (resp: any) => {
          delete resp.created;
          this.response = resp; 
          resp.application_date = this.utilityService.epochToDate(resp.application_date);
          console.log('this.response:', this.response);
          // Show Modal containg warranty details.
        },
        (error: any) => {
          console.log("getWarranty Error: ", error);
          if (error.status === 404) {
            this.isNotPresent = true;
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

  isObject(value: any): boolean {
    return value !== null && typeof value === 'object';
  }

}
