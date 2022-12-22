import { TestBed } from '@angular/core/testing';

import { RequestUtilService } from './request-util.service';

describe('RequestUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestUtilService = TestBed.get(RequestUtilService);
    expect(service).toBeTruthy();
  });
});
