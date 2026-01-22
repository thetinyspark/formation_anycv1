import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isConnectedGuardGuard } from './is-connected-guard.guard';

describe('isConnectedGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isConnectedGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
