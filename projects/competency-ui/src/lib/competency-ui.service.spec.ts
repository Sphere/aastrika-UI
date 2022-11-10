import { TestBed } from '@angular/core/testing';

import { CompetencyUiService } from './competency-ui.service';

describe('CompetencyUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetencyUiService = TestBed.get(CompetencyUiService);
    expect(service).toBeTruthy();
  });
});
