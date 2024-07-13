import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWarrantyComponent } from './register-warranty.component';

describe('RegisterWarrantyComponent', () => {
  let component: RegisterWarrantyComponent;
  let fixture: ComponentFixture<RegisterWarrantyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterWarrantyComponent]
    });
    fixture = TestBed.createComponent(RegisterWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
