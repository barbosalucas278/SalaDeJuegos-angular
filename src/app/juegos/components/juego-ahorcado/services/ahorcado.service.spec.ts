import { TestBed } from '@angular/core/testing';

import { AhorcadoService } from './ahorcado.service';

describe('AhorcadoService', () => {
  let service: AhorcadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhorcadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
