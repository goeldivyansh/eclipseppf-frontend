import { Component, Input } from '@angular/core';
import { WarrantyInfo } from '../../WarrantyInfo';
import { UtilityService } from '../../Services/utility.service';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-warranty-card',
  templateUrl: './warranty-card.component.html',
  styleUrls: ['./warranty-card.component.css']
})
export class WarrantyCardComponent {
  @Input() warrantyInfo: WarrantyInfo;
  
  selectedImage: string;
  imageName: any;

  warrantyInfoArr: WarrantyInfo[] = [];
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
