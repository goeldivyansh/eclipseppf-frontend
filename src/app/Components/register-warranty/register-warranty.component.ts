import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';
import { WarrantyInfo } from '../../WarrantyInfo';


@Component({
  selector: 'app-register-warranty',
  templateUrl: './register-warranty.component.html',
  styleUrls: ['./register-warranty.component.css']
})
export class RegisterWarrantyComponent {
  // @ViewChild('warrantyCardModal') warrantyCardModal!: WarrantyCardComponent;

  ppfRollInfo = {
    quantity: '',
    roll_no: '',
    customer: {
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      mobile_no: '',
      email: '',
    },
    car_details: {
      car_no: '',
      mfd_year: '',
      model_name: '',
      photos: '',
    }
  };
  isEmpty: any | false;
  isInvalidRequest: any | false;
  isAlreadyPresent: any | false;
  response: any | undefined;
  dealerObj: any;
  warrantyInfoObj: WarrantyInfo;

  constructor(private carsService: CarsService, private authService: AuthService,
    private utilityService: UtilityService, private router: Router) {}
  
  onSubmit() {
    this.isAlreadyPresent = false;
    this.isInvalidRequest = false;
    this.response = false;
    this.isEmpty = this.inputValidation(this.ppfRollInfo);

    if (this.isEmpty) {
      this.isEmpty = true;
      console.log("Fields are empty")
    } else {
      // Fetch dealer from local storage
      this.dealerObj = this.utilityService.getDealerFromLocal();

      this.carsService.registerCarPpfWarranty({
        username: this.dealerObj.username,
        token: this.dealerObj.token,
        ppfRollInfo: this.ppfRollInfo
      }).subscribe(
        (resp: any) => {
          this.response = resp;
          console.log('registerCarPpfWarranty Response', resp);
          this.isAlreadyPresent = false;
          this.isInvalidRequest = false;

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
          console.log("registerCarPpfWarranty Error: ", error);
          if (error.status === 406) {
            this.isAlreadyPresent = true;
          }
          else {
            this.isInvalidRequest = true;
          }
        }
      );
    }

  }

  inputValidation(obj: any) {
    console.log(obj);
    return false;
    if (
      !obj.quantity || obj.roll_no === '' ||
      obj.customer.name === '' ||
      obj.customer.address === '' ||
      obj.customer.city === '' ||
      obj.customer.state === '' ||
      !obj.customer.pincode || !obj.customer.mobile_number ||
      obj.customer.email === '' || 
      obj.car_details.car_no === '' ||
      !obj.car.mfd_year ||
      obj.car.model_name === ''
    ) {
      return true;
    }
    return false;
  };
}
