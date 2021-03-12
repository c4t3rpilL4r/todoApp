import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  key = 'token';
  private jwtHelper: JwtHelperService;

  constructor(private localStorageService: LocalStorageService) {
    this.jwtHelper = new JwtHelperService();
  }

  saveJwt(token: string) {
    this.localStorageService.setItem(this.key, token);
  }

  getJwt() {
    return this.localStorageService.getItem(this.key);
  }

  checkTokenValidity() {
    const token = `${this.getJwt()}`.trim();

    if (!token) {
      return false;
    }

    let isValidToken: boolean;

    try {
      isValidToken = !this.jwtHelper.isTokenExpired(token);
    } catch {
      isValidToken = false;
    }

    return isValidToken;
  }
}
