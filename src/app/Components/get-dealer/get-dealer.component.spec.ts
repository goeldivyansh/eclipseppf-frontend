import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDealerComponent } from './get-dealer.component';

describe('GetDealerComponent', () => {
  let component: GetDealerComponent;
  let fixture: ComponentFixture<GetDealerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDealerComponent]
    });
    fixture = TestBed.createComponent(GetDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
