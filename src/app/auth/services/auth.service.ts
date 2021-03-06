import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  hasToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  logIn(email: string, password: string) {
    return this.http.post(`${environment.authUrl}/users/login`, { email, password });
  }

  logOut() {
    return this.http.post(`${environment.authUrl}/users/logout`, {});
  }

  signUp(email: string, name: string, password: string) {
    return this.http.post(`${environment.authUrl}/users`, { email, name, password });
  }
}
