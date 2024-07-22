import { Component } from '@angular/core';
import { UtilityService } from '../../Services/utility.service';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  selectedImage: string;
  imageName: any;

  response: any = {
    customer: {
      name: 'name',
      address: 'address',
      city: 'city',
      state: 'state',
      pincode: 'pincode',
      mobile_no: 'mobile_no',
      email: 'email',
    },
    dealer: {
      name: 'name',
      address: 'address',
      city: 'city',
      state: 'state',
      mobile_no: 'mobile_no'
    },
    ppf: {
      name: 'ECLIPSE PPF',
      ppf_roll_no: 'roll_no',
      sqft: 'quantity',
    },
    car: {
      vehicle_no: 'car_no',
      year: 'mfd_year',
      model: 'model_name',
      installation_date: 'timestamp',
      expiry_date: 'timestamp',
    }
  }
  
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  openModal(obj: any, linkNo: string): void {
    this.selectedImage = obj['photos'][linkNo];
    this.imageName = this.selectedImage.split('/').pop();
    this.imageName = this.imageName.split('.')[0];

    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

}
