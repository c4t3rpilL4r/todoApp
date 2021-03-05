import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  key = 'token';

  constructor(private localStorageService: LocalStorageService) {}

  saveJwt(token: string) {
    this.localStorageService.setItem(this.key, token);
  }

  getJwt() {
    return this.localStorageService.getItem(this.key);
  }

  checkTokenValidity() {
    const token = `${this.getJwt}`.trim();
  }
}
