import { TestBed } from '@angular/core/testing';

import { CustomerFilesService } from './customer-files.service';

describe('CustomerFilesService', () => {
  let service: CustomerFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
