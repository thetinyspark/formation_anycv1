import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

export const isConnectedGuardGuard: CanActivateFn = (route, state) => {
  return inject(LoginServiceService).isConnected();
};
