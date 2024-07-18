import { Component, Input } from '@angular/core';
import { WarrantyInfo } from '../../WarrantyInfo';

@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.css']
})
export class WarrantyListComponent {
  @Input() warrantyInfoArr: WarrantyInfo[] = [];
}
