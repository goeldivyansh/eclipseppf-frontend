import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';
import { WarrantyInfo } from '../../WarrantyInfo';

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
  warrantyInfoObj: WarrantyInfo;

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

          console.log('this.response:', this.response);

          this.warrantyInfoObj = {
            application_date: this.utilityService.epochToDate(resp.application_date),
            roll_no: resp.roll_no,
            car_no: resp.car_details.car_no,
            expiry_date: this.utilityService.epochToDate(resp.application_date + (5*365*24*60*60*1000)),
            warranty_card: resp.warranty_card,
            photos: {
              link1: resp.car_details.photos.link1,
              link2: resp.car_details.photos.link2,
              link3: resp.car_details.photos.link3,
              link4: resp.car_details.photos.link4,
              link5: resp.car_details.photos.link5,
              link6: resp.car_details.photos.link6
            }
          }
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

}
