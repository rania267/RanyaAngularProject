import { TestBed } from '@angular/core/testing';

import { Database2Service } from './database2.service';

describe('Database2Service', () => {
  let service: Database2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Database2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
