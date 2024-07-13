import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  showRegisterDealerComponent: any | false;
  showRegisterWarrantyComponent: any | false;
  showCheckWarrantyComponent: any | false;
  showUpdateDealerComponent: any | false;
  showGetDealerComponent: any | false;
  showSearchDealerCarComponent: any | false;
  showSearchAllCarComponent: any | false;

  tableData = [
    { col1: 'Value 1', col2: 'Value 2', col3: 'Value 3', col4: 'Value 4', col5: 'Value 5' },
    { col1: 'Value 1', col2: 'Value 2', col3: 'Value 3', col4: 'Value 4', col5: 'Value 5' },
    { col1: 'Value 1', col2: 'Value 2', col3: 'Value 3', col4: 'Value 4', col5: 'Value 5' },
    { col1: 'Value 1', col2: 'Value 2', col3: 'Value 3', col4: 'Value 4', col5: 'Value 5' },
    { col1: 'Value 1', col2: 'Value 2', col3: 'Value 3', col4: 'Value 4', col5: 'Value 5' }
  ];

  performOperation(operation: string, rowData: any) {
    // Implement your operation logic here
    console.log(`Performing ${operation} on row:`, rowData);
    // Yo
  }

  toggleRegisterDealerComponent() {
    this.showRegisterDealerComponent = !this.showRegisterDealerComponent;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }
  toggleRegisterWarrantyComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = !this.showRegisterWarrantyComponent;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }
  toggleCheckWarrantyComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = !this.showCheckWarrantyComponent;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }

 
  toggleUpdateDealerComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = !this.showUpdateDealerComponent;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }
  toggleGetDealerComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = !this.showGetDealerComponent;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = false;
  }
  toggleSearchDealerCarComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = !this.showSearchDealerCarComponent;
    this.showSearchAllCarComponent = false;
  }
  toggleSearchAllCarComponent() {
    this.showRegisterDealerComponent = false;
    this.showRegisterWarrantyComponent = false;
    this.showCheckWarrantyComponent = false;
    this.showUpdateDealerComponent = false;
    this.showGetDealerComponent = false;
    this.showSearchDealerCarComponent = false;
    this.showSearchAllCarComponent = !this.showSearchAllCarComponent;
  }

}
