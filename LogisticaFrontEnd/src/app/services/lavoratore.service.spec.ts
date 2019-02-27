import { TestBed } from '@angular/core/testing';

import { LavoratoreService } from './lavoratore.service';

describe('LavoratoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LavoratoreService = TestBed.get(LavoratoreService);
    expect(service).toBeTruthy();
  });
});
