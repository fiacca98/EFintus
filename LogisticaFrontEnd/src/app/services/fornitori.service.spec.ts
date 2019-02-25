import { TestBed } from '@angular/core/testing';

import { FornitoriService } from '../services/fornitori.service';

describe('FornitoriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FornitoriService = TestBed.get(FornitoriService);
    expect(service).toBeTruthy();
  });
});
