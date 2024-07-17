import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-search-all-cars',
  templateUrl: './search-all-cars.component.html',
  styleUrls: ['./search-all-cars.component.css']
})
export class SearchAllCarsComponent {
  username: any | '';
  startdate: any | '';
  enddate: any | '';
  recent: any | '';

  isEmpty: any | false;
  isInvalidRequest: any | false;
  isAnyCarPresent: any | true;
  response: any | undefined;

  constructor(private authService: AuthService, private carsService: CarsService, private router: Router) {}
  
  onSubmit()  {
    this.isInvalidRequest = false;
    this.isAnyCarPresent = true;
    this.response = undefined;

    if (!this.recent && !(this.startdate && this.enddate)) {
      this.isEmpty = true;
    } else {
      console.log('getDealerCars Response1 ', this.recent);
      console.log('getDealerCars recentrecentonse2 ', this.startdate);
      console.log('getDealerCars Responsewewr3 ', this.enddate);

      if (this.recent) {
        let oneDayTimeInMS = 24*60*60*1000;
        let recentTimeInMS;
        if (this.recent === '1M') { recentTimeInMS = 30*oneDayTimeInMS; } 
        else if (this.recent === '1W') { recentTimeInMS = 7*oneDayTimeInMS; }
        else { recentTimeInMS = oneDayTimeInMS; }

        this.startdate = this.getDateEpochFromTimestamp(Date.now() - recentTimeInMS);
        this.enddate = this.getDateEpochFromTimestamp(Date.now() + oneDayTimeInMS);
      } else {
        this.enddate = this.convertDateToEpoch(this.enddate);
        this.startdate = this.convertDateToEpoch(this.startdate);
      }

      this.carsService.getAllCars({
        token: this.authService.getDealerToken(),
        startdate: this.startdate,
        enddate: this.enddate,
      }).subscribe(
        (resp: any) => {
          this.response = resp;
          console.log('getDealerCars Response', resp);

          // Show car list component
      
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

  convertDateToEpoch(dateString: any) {
    // Split the date string into day, month, and year components
    let parts = dateString.split('-');
    
    // Ensure parts array has exactly three elements (day, month, year)
    if (parts.length !== 3) {
        console.error('Invalid date format');
        return null;
    }
    
    // Parse day, month, and year from parts array
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1; // Month is zero-indexed in JavaScript (0-11)
    let year = parseInt(parts[2], 10);
    
    // Create a Date object with parsed components
    let dateObject = new Date(year, month, day);
    
    // Get epoch time in milliseconds
    let epochTime = dateObject.getTime();
    
    return epochTime;
  }

  getDateEpochFromTimestamp(currentEpochTime: any) {
    // Get current epoch time in milliseconds
  
    // Create a new Date object using the current epoch time
    let dateObject = new Date(currentEpochTime);
  
    // Set the time to midnight (00:00:00) for the current date
    dateObject.setHours(0, 0, 0, 0);
  
    // Get epoch time in milliseconds for midnight of the current date
    let dateEpochTime = dateObject.getTime();
  
    return dateEpochTime;
  }  
}
