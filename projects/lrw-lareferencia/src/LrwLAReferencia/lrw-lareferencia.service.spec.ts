import { TestBed } from '@angular/core/testing';

import { LrwLAReferenciaService } from './lrw-lareferencia.service';

describe('LrwLAReferenciaService', () => {
  let service: LrwLAReferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LrwLAReferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
