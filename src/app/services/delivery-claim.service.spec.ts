import { TestBed } from '@angular/core/testing';

import { DeliveryClaimService } from './delivery-claim.service';

describe('DeliveryClaimService', () => {
  let service: DeliveryClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
