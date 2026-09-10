import { TestBed } from '@angular/core/testing';

import { Pendo } from './pendo';

describe('Pendo', () => {
  let service: Pendo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pendo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
