import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../Models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {
 ApiUrl='http://abdallatifhossni-001-site1.etempurl.com/api/Reports'
  constructor(private http:HttpClient) { }
  GetAllReports():Observable<Report[]>{

    return this.http.get<Report[]>(`${this.ApiUrl}`);
  }
  GetById(id:number):Observable<Report>{
    return this.http.get<Report>(`${this.ApiUrl}/${id}`);
  }

  Update(id:number,report:Report):Observable<Report>{
    return this.http.put<Report>(`${this.ApiUrl}/${id}`,report);
  }
  addReport(report:Report):Observable<Report>
  {
     return this.http.post<Report>(`${this.ApiUrl}`,report);
  }
  deleteReport(id:number):Observable<Report>{
    return this.http.delete<Report>(`${this.ApiUrl}/${id}`);
  }

}
