import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWarrantyComponent } from './check-warranty.component';

describe('CheckWarrantyComponent', () => {
  let component: CheckWarrantyComponent;
  let fixture: ComponentFixture<CheckWarrantyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckWarrantyComponent]
    });
    fixture = TestBed.createComponent(CheckWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
