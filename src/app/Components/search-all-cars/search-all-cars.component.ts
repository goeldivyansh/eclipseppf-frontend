import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';
import { WarrantyInfo } from '../../WarrantyInfo';

@Component({
  selector: 'app-search-all-cars',
  templateUrl: './search-all-cars.component.html',
  styleUrls: ['./search-all-cars.component.css']
})
export class SearchAllCarsComponent {
  username: string | '';
  startdate: any | '';
  enddate: any | '';
  recent: string | '';
  minEnddate: string | null = null;


  isEmpty: any | false;
  isInvalidRequest: any | false;
  isAnyCarPresent: any | true;
  response: any | undefined;
  warrantyInfoArr: WarrantyInfo[];
  warrantyInfoObj: WarrantyInfo;

  constructor(private authService: AuthService, private carsService: CarsService,
    private utilityService: UtilityService, private router: Router) {}
  
  onSubmit()  {
    this.isEmpty = false;
    this.isInvalidRequest = false;
    this.isAnyCarPresent = true;
    this.response = undefined;

    if (!this.recent && !(this.startdate && this.enddate)) {
      this.isEmpty = true;
    } else {
      console.log('recent ', this.recent);
      console.log('startdate ', this.startdate);
      console.log('enddate ', this.enddate);

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

      this.carsService.getAllCars({
        token: this.utilityService.getDealerToken(),
        startdate: this.startdate,
        enddate: this.enddate,
      }).subscribe(
        (resp: any) => {
          
          this.warrantyInfoArr = [];
          console.log('getDealerCars Response', resp);
          console.log(' warrantyInfoArr-1', this.warrantyInfoArr);

          for (let obj of resp) {
            this.warrantyInfoObj = {
              application_date: this.utilityService.epochToDate(obj.application_date),
              roll_no: obj.roll_no,
              car_no: obj.car_details.car_no,
              expiry_date: this.utilityService.epochToDate(obj.application_date + (5*365*24*60*60*1000)),
              warranty_card: obj.warranty_card
            }
            this.warrantyInfoArr.push(this.warrantyInfoObj);
          }
          
          console.log(' warrantyInfoArr-2', this.warrantyInfoArr);
          this.response = resp;
          this.startdate = '';
          this.enddate = '';
        },
        (error: any) => {
          console.log("getAllCars Error: ", error);
          if (error.status === 404) {
            this.isAnyCarPresent = false;
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

  updateMinEnddate() {
    this.minEnddate = this.startdate;
  }
}
