import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthLogIn } from '../Models/auth-log-in';
@Injectable({
 providedIn: 'root'
})
export class AuthService {
  private apiUrl = `http://abdallatifhossni-001-site1.htempurl.com/api/Accounts/token`;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(user:AuthLogIn): Observable<AuthLogIn> {
    return this.http.post(`${this.apiUrl}`,user)
    .pipe(
      map((response: any) => {
        const token = response.token;
        localStorage.setItem('access_token', token);
        return token;
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string {
    return localStorage.getItem('access_token') as string;
  }
}
