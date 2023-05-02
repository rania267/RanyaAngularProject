import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFrontComponent } from './delivery-front.component';

describe('DeliveryFrontComponent', () => {
  let component: DeliveryFrontComponent;
  let fixture: ComponentFixture<DeliveryFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
