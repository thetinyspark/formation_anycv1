import { CanActivateFn } from '@angular/router';

export const isConnectedGuardGuard: CanActivateFn = (route, state) => {
  // return Math.random() > 0.5;
  return true;
};
