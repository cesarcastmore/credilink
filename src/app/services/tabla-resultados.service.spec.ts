import { TestBed } from '@angular/core/testing';

import { TablaResultadosService } from './tabla-resultados.service';

describe('TablaResultadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablaResultadosService = TestBed.get(TablaResultadosService);
    expect(service).toBeTruthy();
  });
});
