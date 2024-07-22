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
  // selectedFiles: FileList;
  selectedFiles=[];
  
  images: File[] = new Array(6);

  constructor(private carsService: CarsService, private authService: AuthService,
    private utilityService: UtilityService, private router: Router) {}
  
  // onSubmit() {
  //   this.isAlreadyPresent = false;
  //   this.isInvalidRequest = false;
  //   this.response = false;
  //   this.isEmpty = this.inputValidation(this.ppfRollInfo);


  //   if (this.isEmpty) {
  //     this.isEmpty = true;
  //     console.log("Fields are empty")
  //   } else {
      
  //     // Fetch dealer from local storage
  //     this.dealerObj = this.utilityService.getDealerFromLocal();

  //     // formData.append('quantity', this.ppfRollInfo.quantity);
  //     // formData.append('roll_no', this.ppfRollInfo.roll_no);
  //     // formData.append('customer.name', this.ppfRollInfo.customer.name);
  //     // formData.append('customer.address', this.ppfRollInfo.customer.address);
  //     // formData.append('customer.city', this.ppfRollInfo.customer.city);
  //     // formData.append('customer.state', this.ppfRollInfo.customer.state);
  //     // formData.append('customer.pincode', this.ppfRollInfo.customer.pincode);
  //     // formData.append('customer.mobile_no', this.ppfRollInfo.customer.mobile_no);
  //     // formData.append('customer.email', this.ppfRollInfo.customer.email);
      
      
  //     // formData.append('car_details.car_no', this.ppfRollInfo.car_details.car_no);
  //     // formData.append('car_details.mfd_year', this.ppfRollInfo.car_details.mfd_year);
  //     // formData.append('car_details.model_name', this.ppfRollInfo.car_details.model_name);

      
      
      
  //     // this.selectedFiles.forEach((file, index) => {
  //     //   formData.append(`image${index + 1}`, file);
  //     //   formData.append(`car_details.photos['link${index}']`, this.selectedFiles[index]);
  //     // });
      
  //     console.log('this.selectedFiles:', this.selectedFiles);
  //     // for (let index in this.selectedFiles) {
  //     //   console.log('this.selectedFiles[index ----', this.selectedFiles[index]['name']);
  //     //   formData.append(`photo${index}]`, this.selectedFiles[index]);
  //     // }
  //     const formData = new FormData();

  //     for (let img of this.selectedFiles) {
  //       formData.append('files', img);
  //     }

  //     // for (let i = 0; i < this.selectedFiles.length; i++) {
  //     //   formData.append('files', this.selectedFiles[i], this.selectedFiles[i].name);
  //     // }
  //     // this.ppfRollInfo.car_details.photos = formData;
      
  //     console.log('formdata: ', formData)


  //     this.carsService.uploadImages(formData).subscribe(
  //       (resp: any) => {
  //         this.response = resp;
  //         console.log('uploadImages Response', resp);
  //         this.isAlreadyPresent = false;
  //         this.isInvalidRequest = false;

  //         this.warrantyInfoObj = {
  //           application_date: this.utilityService.epochToDate(resp.application_date),
  //           roll_no: resp.roll_no,
  //           car_no: resp.car_details.car_no,
  //           expiry_date: this.utilityService.epochToDate(resp.application_date + (5*365*24*60*60*1000)),
  //           warranty_card: resp.warranty_card,
  //           photos: {
  //             link1: resp.car_details.photos.link1,
  //             link2: resp.car_details.photos.link2,
  //             link3: resp.car_details.photos.link3,
  //             link4: resp.car_details.photos.link4,
  //             link5: resp.car_details.photos.link5,
  //             link6: resp.car_details.photos.link6
  //           }
  //         }
  //       },
  //       (error: any) => {
  //         console.log("registerCarPpfWarranty Error: ", error);
  //         if (error.status === 406) {
  //           this.isAlreadyPresent = true;
  //         }
  //         else {
  //           this.isInvalidRequest = true;
  //         }
  //       }
  //     );

  //     // this.carsService.registerCarPpfWarranty({
  //     //   username: this.dealerObj.username,
  //     //   token: this.dealerObj.token,
  //     //   ppfRollInfo: this.ppfRollInfo
  //     // }).subscribe(
  //     //   (resp: any) => {
  //     //     this.response = resp;
  //     //     console.log('registerCarPpfWarranty Response', resp);
  //     //     this.isAlreadyPresent = false;
  //     //     this.isInvalidRequest = false;

  //     //     this.warrantyInfoObj = {
  //     //       application_date: this.utilityService.epochToDate(resp.application_date),
  //     //       roll_no: resp.roll_no,
  //     //       car_no: resp.car_details.car_no,
  //     //       expiry_date: this.utilityService.epochToDate(resp.application_date + (5*365*24*60*60*1000)),
  //     //       warranty_card: resp.warranty_card,
  //     //       photos: {
  //     //         link1: resp.car_details.photos.link1,
  //     //         link2: resp.car_details.photos.link2,
  //     //         link3: resp.car_details.photos.link3,
  //     //         link4: resp.car_details.photos.link4,
  //     //         link5: resp.car_details.photos.link5,
  //     //         link6: resp.car_details.photos.link6
  //     //       }
  //     //     }
  //     //   },
  //     //   (error: any) => {
  //     //     console.log("registerCarPpfWarranty Error: ", error);
  //     //     if (error.status === 406) {
  //     //       this.isAlreadyPresent = true;
  //     //     }
  //     //     else {
  //     //       this.isInvalidRequest = true;
  //     //     }
  //     //   }
  //     // );
  //   }

  // }

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

      const formData = new FormData();
      formData.append('quantity', this.ppfRollInfo.quantity);
      formData.append('roll_no', this.ppfRollInfo.roll_no);
      formData.append('name', this.ppfRollInfo.customer.name);
      formData.append('address', this.ppfRollInfo.customer.address);
      formData.append('city', this.ppfRollInfo.customer.city);
      formData.append('state', this.ppfRollInfo.customer.state);
      formData.append('pincode', this.ppfRollInfo.customer.pincode);
      formData.append('mobile_no', this.ppfRollInfo.customer.mobile_no);
      formData.append('email', this.ppfRollInfo.customer.email);
      formData.append('car_no', this.ppfRollInfo.car_details.car_no);
      formData.append('mfd_year', this.ppfRollInfo.car_details.mfd_year);
      formData.append('model_name', this.ppfRollInfo.car_details.model_name);
      formData.append('token', this.dealerObj.token);
    
      for (let img of this.selectedFiles) {
        formData.append('files', img);
      }
      
      this.carsService.registerCarPpfWarranty(this.dealerObj.username, formData).subscribe(
        (resp: any) => {
          console.log('registerCarPpfWarranty Response', resp);
          // this.response = resp;
          // this.isAlreadyPresent = false;
          // this.isInvalidRequest = false;

          // this.warrantyInfoObj = {
          //   application_date: this.utilityService.epochToDate(resp.application_date),
          //   roll_no: resp.roll_no,
          //   car_no: resp.car_details.car_no,
          //   expiry_date: this.utilityService.epochToDate(resp.application_date + (5*365*24*60*60*1000)),
          //   warranty_card: resp.warranty_card,
          //   photos: {
          //     link1: resp.car_details.photos.link1,
          //     link2: resp.car_details.photos.link2,
          //     link3: resp.car_details.photos.link3,
          //     link4: resp.car_details.photos.link4,
          //     link5: resp.car_details.photos.link5,
          //     link6: resp.car_details.photos.link6
          //   }
          // }
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

      // this.carsService.registerCarPpfWarranty({
      //   username: this.dealerObj.username,
      //   token: this.dealerObj.token,
      //   ppfRollInfo: this.ppfRollInfo
      // }).subscribe(
      //   (resp: any) => {
      //     this.response = resp;
      //     console.log('registerCarPpfWarranty Response', resp);
      //     this.isAlreadyPresent = false;
      //     this.isInvalidRequest = false;

      //     this.warrantyInfoObj = {
      //       application_date: this.utilityService.epochToDate(resp.application_date),
      //       roll_no: resp.roll_no,
      //       car_no: resp.car_details.car_no,
      //       expiry_date: this.utilityService.epochToDate(resp.application_date + (5*365*24*60*60*1000)),
      //       warranty_card: resp.warranty_card,
      //       photos: {
      //         link1: resp.car_details.photos.link1,
      //         link2: resp.car_details.photos.link2,
      //         link3: resp.car_details.photos.link3,
      //         link4: resp.car_details.photos.link4,
      //         link5: resp.car_details.photos.link5,
      //         link6: resp.car_details.photos.link6
      //       }
      //     }
      //   },
      //   (error: any) => {
      //     console.log("registerCarPpfWarranty Error: ", error);
      //     if (error.status === 406) {
      //       this.isAlreadyPresent = true;
      //     }
      //     else {
      //       this.isInvalidRequest = true;
      //     }
      //   }
      // );
    }

  }



  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  // urls: any;
  // onFileSelected(event: any) {
  //   if (event.target.files) {
  //     this.urls = [];

  //     for(let i=0;i<event.target.files;i++) {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(event.target.files[i]);
        
  //       reader.onload = (event: any) => {
  //         console.log('event.target.result: ', event);
  //         this.urls.push(event.target.result);
  //       }
  //     }
  //     console.log('event.: ', event);
  //     console.log('this.urls: ', this.urls);
  //   }
  // }

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
