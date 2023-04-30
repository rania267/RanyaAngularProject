import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryClaimComponent } from './delivery-claim.component';

describe('DeliveryClaimComponent', () => {
  let component: DeliveryClaimComponent;
  let fixture: ComponentFixture<DeliveryClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
