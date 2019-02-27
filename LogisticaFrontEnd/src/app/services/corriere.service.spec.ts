import { TestBed } from '@angular/core/testing';

import { CorriereService } from './corriere.service';

describe('CorriereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorriereService = TestBed.get(CorriereService);
    expect(service).toBeTruthy();
  });
});
