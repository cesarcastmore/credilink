import { TestBed } from '@angular/core/testing';

import { EnviadorCorreoService } from './enviador-correo.service';

describe('EnviadorCorreoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviadorCorreoService = TestBed.get(EnviadorCorreoService);
    expect(service).toBeTruthy();
  });
});
