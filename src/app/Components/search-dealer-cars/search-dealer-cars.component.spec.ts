import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDealerCarsComponent } from './search-dealer-cars.component';

describe('SearchDealerCarsComponent', () => {
  let component: SearchDealerCarsComponent;
  let fixture: ComponentFixture<SearchDealerCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDealerCarsComponent]
    });
    fixture = TestBed.createComponent(SearchDealerCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
