import { Component, ElementRef, ViewChild } from '@angular/core';
// import { Bootstrap } from 'ng-bootstrap;

@Component({
  selector: 'app-warranty-card',
  templateUrl: './warranty-card.component.html',
  styleUrls: ['./warranty-card.component.css']
})
export class WarrantyCardComponent {
  // @Input() carDetails = {
  //   carNumber: '',
  //   rollNumber: '',
  //   shopName: '',
  //   warrantyPeriod: ''
  // };
  @ViewChild('myModal') modalElement!: ElementRef;


  // constructor(private bootstrap: Bootstrap) { }

  // openModal() {
  //   const modal = new bootstrap.Modal(this.modalElement.nativeElement);
  //   modal.show();
  // }

  // closeModal() {
  //   const modal = new bootstap.Modal(this.modalElement.nativeElement);
  //   modal.hide();
  // }

  // submitWarrantyCard() {
  //   // Handle form submission logic
  //   console.log('Warranty Card Details:', this.carDetails);
  //   this.modalService.dismissAll();
  // }
}
