import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthData } from '@app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  register(username: string, password: string) {
    const authData: IAuthData = {
      username,
      password,
    };

    const isSuccessful = this.httpClient
      .post('http://localhost:3000/v1/users', authData)
      .toPromise();

    return !!isSuccessful;
  }
}
