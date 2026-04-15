import { TestBed } from '@angular/core/testing';

import { GainedService } from './gained.service';

describe('GainedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GainedService = TestBed.inject(GainedService);
    expect(service).toBeTruthy();
  });
});
