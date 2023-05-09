import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRegister } from '../Models/auth-register';
@Injectable({
  providedIn: 'root'
})
export class AuthRegistrationService {

  private registerUrl = 'http://abdallatifhossni-001-site1.htempurl.com/api/Accounts/register';

  constructor(private http: HttpClient) { }

  registerUser(user:AuthRegister): Observable<AuthRegister> 
  {
    return this .http.post<AuthRegister>(`${this.registerUrl}`,user)
    };
    
}
