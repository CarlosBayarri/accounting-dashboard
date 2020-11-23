import { TestBed } from '@angular/core/testing';

import { IncomeexpenseService } from './incomeexpense.service';

describe('IncomeexpenseService', () => {
  let service: IncomeexpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeexpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
