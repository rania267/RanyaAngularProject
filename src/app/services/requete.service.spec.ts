import { TestBed } from '@angular/core/testing';

import { RequeteService } from './requete.service';

describe('RequeteService', () => {
  let service: RequeteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequeteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
