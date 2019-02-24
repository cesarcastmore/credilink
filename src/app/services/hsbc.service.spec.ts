import { TestBed } from '@angular/core/testing';

import { HsbcService } from './hsbc.service';

describe('HsbcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HsbcService = TestBed.get(HsbcService);
    expect(service).toBeTruthy();
  });
});
