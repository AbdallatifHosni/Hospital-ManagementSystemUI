import { Doctor } from './../Models/doctor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 ApiUrl='http://abdallatifhossni-001-site1.htempurl.com/api/Doctors';

  constructor(private http:HttpClient) { }
  getDoctors():Observable<Doctor[]>{

    return this.http.get<Doctor[]>(`${this.ApiUrl}`);
  }
  getDoctorById(id:number):Observable<Doctor>{

    return this.http.get<Doctor>(`${this.ApiUrl}/${id}`)
  }
  updateDoctor(id:number,doctor:Doctor):Observable<Doctor>{
    return this.http.put<Doctor>(`${this.ApiUrl}/${id}`,doctor);
  }

  addDoctor(doctor:Doctor):Observable<Doctor>{

    return this.http.post<Doctor>(`${this.ApiUrl}`,doctor)
  }
}
