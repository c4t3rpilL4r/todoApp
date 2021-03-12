import { AuthService } from '@app/services';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate() {
    return this.checkLoggedIn();
  }

  checkLoggedIn() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.authService.logout();
    return false;
  }
}
