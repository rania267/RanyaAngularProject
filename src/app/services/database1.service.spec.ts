import { TestBed } from '@angular/core/testing';

import { Database1Service } from './database1.service';

describe('Database1Service', () => {
  let service: Database1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Database1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
