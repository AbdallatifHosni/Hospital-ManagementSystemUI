import { Injectable } from '@angular/core';
import { DialysisUnit } from '../Models/dialysis-unit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialysisUnitService {

  //http://abdallatifhossni-001-site1.htempurl.com/api
  private apiUrl = "http://abdallatifhossni-001-site1.htempurl.com/api/DialysisUnits";

  constructor(private http: HttpClient) {}

  getDialysisUnits(): Observable<DialysisUnit[]> {
    return this.http.get<DialysisUnit[]>(`${this.apiUrl}`);
  }
  getDialysisUnitsById(id:number): Observable<DialysisUnit> {
    return this.http.get<DialysisUnit>(`${this.apiUrl}/${id}`);
  }

  createDialysisUnit(dialysis: DialysisUnit): Observable<DialysisUnit> {
    return this.http.post<DialysisUnit>(`${this.apiUrl}`,dialysis);
  }

  updateDialysisUnit(unit: DialysisUnit): Observable<DialysisUnit> {
    return this.http.put<DialysisUnit>(`${this.apiUrl}/${unit.dialysisUnitId}`, unit);
  }

  deleteDialysisUnit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
  
