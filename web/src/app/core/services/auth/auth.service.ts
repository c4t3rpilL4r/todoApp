import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthData } from '@app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    const authData: IAuthData = {
      username,
      password,
    };

    const token = this.httpClient
      .post('http://localhost:3000/v1/auth/login', authData)
      .toPromise();

    return token;
  }
}
