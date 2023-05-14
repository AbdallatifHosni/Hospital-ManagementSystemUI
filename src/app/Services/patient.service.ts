import { Injectable } from '@angular/core';
import{Patient}from'../Models/patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
 constructor(private http: HttpClient) { }
 ApiUrl='http://abdallatifhossni-001-site1.etempurl.com/api/Patients';

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.ApiUrl}`);
  }

  addPatient(patient: Patient): Observable<any> {
    return this.http.post<any>(`${this.ApiUrl}`, patient);
  }
   getPatientById(id:number):Observable<Patient>
   {
     return this.http.get<Patient>(`${this.ApiUrl}/${id}`)
   }
   Update(id:number,patient:Patient):Observable<Patient>{
    return this.http.put<Patient>(`${this.ApiUrl}/${id}/`,patient)



   }
   deletePatient(id:number):Observable<Patient>{
    return this.http.delete<Patient>(`${this.ApiUrl}/${id}`)
   }



}

