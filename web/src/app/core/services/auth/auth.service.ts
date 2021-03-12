import { Router } from '@angular/router';
import { JwtService } from '../jwt/jwt.service';
import { Injectable } from '@angular/core';
import { IAuthData } from '@app/interfaces';
import { ApiService } from '../api/api.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endPoint = 'auth';

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  async login(username: string, password: string) {
    const authData: IAuthData = {
      username,
      password,
    };

    return this.apiService
      .post<ILoginResponse>(`${this.endPoint}/login`, authData)
      .then((data) => {
        this.jwtService.saveJwt(data.token);
        return;
      });
  }

  logout() {
    this.localStorageService.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    const isValidToken = this.jwtService.checkTokenValidity();

    if (!isValidToken) {
      this.localStorageService.remove('token');
    }

    return isValidToken;
  }
}

interface ILoginResponse {
  token: string;
}
