import { TestBed } from '@angular/core/testing';

import { ProduttoreService } from './produttore.service';

describe('ProduttoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduttoreService = TestBed.get(ProduttoreService);
    expect(service).toBeTruthy();
  });
});
