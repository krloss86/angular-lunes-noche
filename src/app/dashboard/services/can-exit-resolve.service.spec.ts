import { TestBed } from '@angular/core/testing';

import { CanExitResolveService } from './can-exit-resolve.service';

describe('CanExitResolveService', () => {
  let service: CanExitResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanExitResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
