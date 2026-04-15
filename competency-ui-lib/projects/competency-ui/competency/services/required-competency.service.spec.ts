import { TestBed } from '@angular/core/testing';

import { RequiredCompetencyService } from './required-competency.service';

describe('RequiredCompetencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequiredCompetencyService = TestBed.inject(RequiredCompetencyService);
    expect(service).toBeTruthy();
  });
});
