import { TestBed } from '@angular/core/testing';

import { SelfAssessmentService } from './self-assessment.service';

describe('SelfAssessmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelfAssessmentService = TestBed.inject(SelfAssessmentService);
    expect(service).toBeTruthy();
  });
});
