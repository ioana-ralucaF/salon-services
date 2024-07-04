import { TestBed } from '@angular/core/testing';

import { SalonInfoService } from './salon-info.service';

describe('SalonInfoService', () => {
  let service: SalonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
