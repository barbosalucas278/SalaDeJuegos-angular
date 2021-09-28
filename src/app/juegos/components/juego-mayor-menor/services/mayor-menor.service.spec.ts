import { TestBed } from '@angular/core/testing';

import { MayorMenorService } from './mayor-menor.service';

describe('MayorMenorService', () => {
  let service: MayorMenorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MayorMenorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
