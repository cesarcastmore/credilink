import { TestBed } from '@angular/core/testing';

import { CredilinkIntegrationsService } from './credilink-integrations.service';

describe('CredilinkIntegrationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CredilinkIntegrationsService = TestBed.get(CredilinkIntegrationsService);
    expect(service).toBeTruthy();
  });
});
