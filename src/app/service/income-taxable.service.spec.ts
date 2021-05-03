import { TestBed } from '@angular/core/testing';

import { IncomeTaxableService } from './income-taxable.service';

describe('IncomeTaxableService', () => {
  let service: IncomeTaxableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeTaxableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
