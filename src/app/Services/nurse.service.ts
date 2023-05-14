import { Injectable } from '@angular/core';
import { Nurse } from '../Models/nurse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NurseService {

  ApiUrl='http://abdallatifhossni-001-site1.etempurl.com/api/Nurses'
  constructor(private http:HttpClient ) { }

  getAllNurse():Observable<Nurse[]>{
    return this.http.get<Nurse[]>(`${this.ApiUrl}`)
  }
  getNurseById(id:number):Observable<Nurse>{

    return  this.http.get<Nurse>(`${this.ApiUrl}/${id}`)
  }
  addNurse(nurse:Nurse):Observable<Nurse>{
    return this.http.post<Nurse>(`${this.ApiUrl}`,nurse);
  }

  update(id:number,nurse:Nurse):Observable<Nurse>{
    return this.http.put<Nurse>(`${this.ApiUrl}/${id}`,nurse)
  }
  delete(id:number):Observable<Nurse>{
    return this.http.delete<Nurse>(`${this.ApiUrl}/${id}`);
  }
}
