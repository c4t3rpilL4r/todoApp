import { JwtService } from '../jwt/jwt.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = `${environment.SERVER_API_URL}`;

  constructor(private httpClient: HttpClient, private jwtService: JwtService) {}

  private post$<T>(path: string, body: any): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}${path}`, body, {
      headers: { Authorization: `Bearer ${this.jwtService.getJwt()}` },
    });
  }

  post<T>(path: string, body: any): Promise<T> {
    return this.post$<T>(path, body).toPromise();
  }

  private get$(path: string, queryParams?: any) {
    return this.httpClient.get(`${this.apiUrl}/${path}`, {
      params: queryParams,
      headers: { Authorization: `Bearer ${this.jwtService.getJwt()}` },
    });
  }

  get(path: string, queryParams?: any) {
    return this.get$(path, queryParams).toPromise();
  }
}
