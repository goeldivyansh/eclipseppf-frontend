import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllCarsComponent } from './search-all-cars.component';

describe('SearchAllCarsComponent', () => {
  let component: SearchAllCarsComponent;
  let fixture: ComponentFixture<SearchAllCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAllCarsComponent]
    });
    fixture = TestBed.createComponent(SearchAllCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
