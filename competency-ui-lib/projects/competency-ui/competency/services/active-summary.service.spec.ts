import { TestBed } from '@angular/core/testing';

import { ActiveSummaryService } from './active-summary.service';

describe('ActiveSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveSummaryService = TestBed.inject(ActiveSummaryService);
    expect(service).toBeTruthy();
  });
});
