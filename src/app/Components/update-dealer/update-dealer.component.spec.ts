import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDealerComponent } from './update-dealer.component';

describe('UpdateDealerComponent', () => {
  let component: UpdateDealerComponent;
  let fixture: ComponentFixture<UpdateDealerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDealerComponent]
    });
    fixture = TestBed.createComponent(UpdateDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
