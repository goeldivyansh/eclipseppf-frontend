import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';
import { WarrantyInfo } from '../../WarrantyInfo';

@Component({
  selector: 'app-search-dealer-cars',
  templateUrl: './search-dealer-cars.component.html',
  styleUrls: ['./search-dealer-cars.component.css']
})
export class SearchDealerCarsComponent {
  username: any | '';
  startdate: any | '';
  enddate: any | '';
  recent: any | '';
  minEnddate: string | null = null;

  isEmpty: any | false;
  isInvalidRequest: any | false;
  isAnyCarPresent: any | true;
  response: any;
  dealerObj: any | {};
  warrantyInfoArr: WarrantyInfo[];
  warrantyInfoObj: WarrantyInfo;

  constructor(private authService: AuthService, private carsService: CarsService,
    private utilityService: UtilityService, private router: Router) {
    this.dealerObj = this.utilityService.getDealerFromLocal();
    console.log('this.dealerObj: ', this.dealerObj);
  }
  
  onSubmit()  {
    this.isInvalidRequest = false;
    this.isEmpty = false;
    this.isAnyCarPresent = true;
    this.response = undefined;

    if (!this.recent && !(this.startdate && this.enddate)) {
      this.isEmpty = true;
    } else {
      if (this.recent) {
        let oneDayTimeInMS = 24*60*60*1000;
        let recentTimeInMS;
        if (this.recent === '1M') { recentTimeInMS = 30*oneDayTimeInMS; } 
        else if (this.recent === '1W') { recentTimeInMS = 7*oneDayTimeInMS; }
        else { recentTimeInMS = oneDayTimeInMS; }

        this.startdate = this.utilityService.getDateEpochFromTimestamp(Date.now() - recentTimeInMS);
        this.enddate = this.utilityService.getDateEpochFromTimestamp(Date.now() + oneDayTimeInMS);
      } else {
        this.enddate = this.utilityService.convertDateToEpoch(this.enddate);
        this.startdate = this.utilityService.convertDateToEpoch(this.startdate);
      }

      this.dealerObj = this.utilityService.getDealerFromLocal();
      this.carsService.getDealerCars({
        username: this.username || this.dealerObj.username,
        token: this.dealerObj.token,
        startdate: this.startdate,
        enddate: this.enddate,
      }).subscribe(
        (resp: any) => {
          this.response = resp;
          console.log('getDealerCars Response', resp);

          this.warrantyInfoArr = [];

          // Show car list component
          for (let obj of resp) {
            this.warrantyInfoObj = {
              application_date: this.utilityService.epochToDate(obj.application_date),
              roll_no: obj.roll_no,
              car_no: obj.car_details.car_no,
              expiry_date: this.utilityService.epochToDate(obj.application_date + (5*365*24*60*60*1000)),
              warranty_card: obj.warranty_card,
              photos: {
                link1: obj.car_details.photos.link1,
                link2: obj.car_details.photos.link2,
                link3: obj.car_details.photos.link3,
                link4: obj.car_details.photos.link4,
                link5: obj.car_details.photos.link5,
                link6: obj.car_details.photos.link6
              }
            }
            
            this.warrantyInfoArr.push(this.warrantyInfoObj);
          }
          
          this.response = resp;
          if (this.warrantyInfoArr.length > 0) {
            this.utilityService.storeWarrantyListInLocal(this.warrantyInfoArr);
            const url = `${this.username || this.dealerObj.username}/ppf-cars?from=${encodeURIComponent(this.startdate)}&to=${encodeURIComponent(this.enddate)}`;
            window.open(url, '_blank');
          }
          
          this.startdate = '';
          this.enddate = '';
        },
        (error: any) => {
          console.log("getDealerCars Error: ", error);
          if (error.status === 404) {
            this.isAnyCarPresent = false;
          } else {
            this.isInvalidRequest = true;
          }
        }
      );
    }

  }

  
  isAdmin() {
    // this.dealerObj = this.utilityService.getDealerFromLocal();
    return this.dealerObj.isAdmin;
  }

  updateMinEnddate() {
    this.minEnddate = this.startdate;
  }
}
