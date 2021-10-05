import { TestBed } from '@angular/core/testing';

import { AdivinaColorService } from './adivina-color.service';

describe('AdivinaColorService', () => {
  let service: AdivinaColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdivinaColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
