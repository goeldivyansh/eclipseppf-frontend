import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { CarsService } from '../../Services/cars.service';
import { AuthService } from '../../Services/auth.service';

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

  constructor(private authService: AuthService, private carsService: CarsService, private router: Router) {
    this.dealerObj = this.authService.getDealerFromLocal();
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
    this.showDealerInfoComponent = false;
    this.showRegisterDealerComponent = !this.showRegisterDealerComponent;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }
  toggleRegisterWarrantyComponent() {
    console.log('toggleRegisterWarrantyComponent clicked: ', this.showRegisterWarrantyComponent);
    this.showDealerInfoComponent = false;
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = !this.showRegisterWarrantyComponent;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
    console.log('toggleRegisterWarrantyComponent clicked 2: ', this.showRegisterWarrantyComponent);
  }
  toggleCheckWarrantyComponent() {
    this.showDealerInfoComponent = false;
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = !this.showCheckWarrantyComponent;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }

  toggleUpdateDealerComponent() {
    this.showDealerInfoComponent = false;
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = !this.showUpdateDealerComponent;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }
  toggleGetDealerComponent() {
    this.showDealerInfoComponent = false;
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = !this.showGetDealerComponent;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }

  toggleSearchDealerCarComponent() {
    this.showDealerInfoComponent = false;
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = !this.showSearchDealerCarComponent;
    this.showSearchAllCarComponent = false;
  }

  toggleSearchAllCarComponent() {
    this.showDealerInfoComponent = false;
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = !this.showSearchAllCarComponent;
  }

  isAdmin() {
    // this.dealerObj = this.authService.getDealerFromLocal();
    return this.dealerObj.isAdmin;
  }

}
