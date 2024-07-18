import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';

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
  // response: any | undefined;

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

          // Show warranty card modal.
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
