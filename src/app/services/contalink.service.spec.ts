import { TestBed } from '@angular/core/testing';

import { ContalinkService } from './contalink.service';

describe('ContalinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContalinkService = TestBed.get(ContalinkService);
    expect(service).toBeTruthy();
  });
});
