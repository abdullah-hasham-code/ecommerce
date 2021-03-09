import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchproductsComponent } from './searchproducts.component';

describe('SearchproductsComponent', () => {
  let component: SearchproductsComponent;
  let fixture: ComponentFixture<SearchproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
