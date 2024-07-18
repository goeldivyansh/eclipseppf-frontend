import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyListComponent } from './warranty-list.component';

describe('WarrantyListComponent', () => {
  let component: WarrantyListComponent;
  let fixture: ComponentFixture<WarrantyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarrantyListComponent]
    });
    fixture = TestBed.createComponent(WarrantyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
