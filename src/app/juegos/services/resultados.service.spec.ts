import { TestBed } from '@angular/core/testing';

import { ResultadosService } from './resultados.service';

describe('ResultadosService', () => {
  let service: ResultadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
