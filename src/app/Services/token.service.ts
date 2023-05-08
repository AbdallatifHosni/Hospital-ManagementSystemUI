import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetToken } from '../Models/get-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
token:GetToken =new GetToken();
  constructor(private http:HttpClient) { }
  GetToken():Observable<any>{
    return this.http.get(`http:// abdallatifhossni-001-site1.htempurl.com/api/Accounts/token`);
  }
}
