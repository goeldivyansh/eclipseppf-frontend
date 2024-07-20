import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';
import { UtilityService } from '../../Services/utility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {

  showDealerInfoComponent: any | true;
  showRegisterDealerComponent: any | false;
  showRegisterWarrantyComponent: any | false;
  showCheckWarrantyComponent: any | false;
  showUpdateDealerComponent: any | false;
  showGetDealerComponent: any | false;
  showSearchDealerCarComponent: any | false;
  showSearchAllCarComponent: any | false;
  
  dealerObj: any | {};

  warrantyInfoArr: object | any;
  

  constructor(private authService: AuthService, private carsService: CarsService,
    private utilityService: UtilityService, private router: Router) {
    this.dealerObj = this.utilityService.getDealerFromLocal();
    this.showDealerInfoComponent = true;
    console.log('this.dealerObj: ', this.dealerObj);
  }
  

  performOperation(operation: string, rowData: any) {
    // Implement your operation logic here
    console.log(`Performing ${operation} on row:`, rowData);
    // Yo
  }

  toggleDealerInfoComponent() {
    this.showDealerInfoComponent = !this.showDealerInfoComponent;
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }

  toggleRegisterDealerComponent() {
    this.showRegisterDealerComponent = !this.showRegisterDealerComponent;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
    this.showDealerInfoComponent = !this.showRegisterDealerComponent ? true : false;
  }
  
  toggleRegisterWarrantyComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = !this.showRegisterWarrantyComponent;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
    this.showDealerInfoComponent = !this.showRegisterWarrantyComponent ? true : false;
  }
  toggleCheckWarrantyComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = !this.showCheckWarrantyComponent;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
    this.showDealerInfoComponent = !this.showCheckWarrantyComponent ? true : false;
  }

  toggleUpdateDealerComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = !this.showUpdateDealerComponent;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
    this.showDealerInfoComponent = !this.showUpdateDealerComponent ? true : false;
  }

  toggleGetDealerComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = !this.showGetDealerComponent;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
    this.showDealerInfoComponent = !this.showGetDealerComponent ? true : false;
  }

  toggleSearchDealerCarComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = !this.showSearchDealerCarComponent;
    this.showSearchAllCarComponent = false;
    this.showDealerInfoComponent = !this.showSearchDealerCarComponent ? true : false;
  }

  toggleSearchAllCarComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = !this.showSearchAllCarComponent;
    this.showDealerInfoComponent = !this.showSearchAllCarComponent ? true : false;
  }

  isAdmin() {
    // this.dealerObj = this.authService.getDealerFromLocal();
    return this.dealerObj.isAdmin;
  }

}
