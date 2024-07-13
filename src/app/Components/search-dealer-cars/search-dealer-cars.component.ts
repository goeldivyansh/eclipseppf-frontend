import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';

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

  isEmpty: any | false;
  isInvalidRequest: any | false;
  isAnyCarPresent: any | true;
  response: any | undefined;

  constructor(private authService: AuthService, private carsService: CarsService, private router: Router) {}
  
  onSubmit()  {
    this.isInvalidRequest = false;

    if (this.isEmpty) {
      this.isEmpty = true;
      console.log("Fields are empty")
    } else {

      if (this.enddate) {
        this.enddate = this.convertDateToEpoch(this.enddate);
      } else {
        this.enddate = this.getCurrentDateEpoch() + (24 * 60 * 60 * 1000); //tobe checked
      }

      if (this.startdate) {
        this.startdate = this.convertDateToEpoch(this.startdate);
      }

      if (this.recent === '1D') {
        this.startdate = this.getCurrentDateEpoch() - (24 * 60 * 60 * 1000);
      } else if (this.recent === '1W') {
        this.startdate = this.getCurrentDateEpoch() - (7 * 24 * 60 * 60 * 1000);
      } else {
        this.startdate = this.getCurrentDateEpoch() - (30 * 24 * 60 * 60 * 1000);
      }

      this.carsService.getDealerCars({
        username: this.username,
        token: this.authService.getDealerToken(),
        startdate: this.startdate,
        enddate: this.enddate,
      }).subscribe(
        (resp: any) => {
          this.response = resp;
          console.log('getDealerCars Response', resp);
          if (resp.length === 0) {
            this.isAnyCarPresent = false;
          }


          // Show car list component
      
        },
        (error: any) => {
          console.log("registerDealer Error: ", error);
          this.isInvalidRequest = true;
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

  getCurrentDateEpoch() {
    // Get current epoch time in milliseconds
    let currentEpochTime = Date.now();
  
    // Create a new Date object using the current epoch time
    let dateObject = new Date(currentEpochTime);
  
    // Set the time to midnight (00:00:00) for the current date
    dateObject.setHours(0, 0, 0, 0);
  
    // Get epoch time in milliseconds for midnight of the current date
    let dateEpochTime = dateObject.getTime();
  
    return dateEpochTime;
  }
;
}
