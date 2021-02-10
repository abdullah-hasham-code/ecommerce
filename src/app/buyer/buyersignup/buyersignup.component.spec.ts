import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersignupComponent } from './buyersignup.component';

describe('BuyersignupComponent', () => {
  let component: BuyersignupComponent;
  let fixture: ComponentFixture<BuyersignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyersignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
