import { TestBed } from '@angular/core/testing';

import { MainProjectService } from './main-project.service';

describe('MainProjectService', () => {
  let service: MainProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
