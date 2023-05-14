import { Injectable } from '@angular/core';
import { Hospital } from '../Models/hospital';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  ApiUrl :string='http://abdallatifhossni-001-site1.etempurl.com/api/Hospitals';
  constructor(public http: HttpClient) { }

  getHospitals(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${this.ApiUrl}`)

  };

  addHospital( hospital: Hospital): Observable<any> {
    return this.http.post<Hospital>(`${this.ApiUrl}`, hospital);
  }

  getHospitalById(id:number):Observable<Hospital>
  {
    return this.http.get<Hospital>(`${this.ApiUrl}/${id}`);
  }
  UpdateHospital(id:number,hospital:Hospital):Observable<Hospital>{
    return this.http.put<Hospital>(`${this.ApiUrl}/${id}`,hospital)
  }
  deleteHospital(id:number):Observable<any>
  {
    return this.http.delete(`${this.ApiUrl}/${id}`);


  }

}

