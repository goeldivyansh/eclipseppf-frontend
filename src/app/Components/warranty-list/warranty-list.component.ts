import { Component, OnInit , Input } from '@angular/core';
import { WarrantyInfo } from '../../WarrantyInfo';
import { UtilityService } from '../../Services/utility.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.css']
})

export class WarrantyListComponent implements OnInit {

  warrantyInfoArr: WarrantyInfo[] = [];
  selectedImage: string;
  imageName: any;

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.warrantyInfoArr = this.utilityService.getWarrantyListFromLocal();
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
