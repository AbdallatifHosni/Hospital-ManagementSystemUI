import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../Models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {
  ApiUrl='http://abdallatifhossni-001-site1.etempurl.com/api/Scheduls';

  constructor(private http:HttpClient) { }
  GetAllSchedule():Observable<Schedule[]>{
     return this.http.get<Schedule[]>( `${this.ApiUrl} `);
  }
  GetByIdSchedule(id:number):Observable<Schedule>{
    return this.http.get<Schedule>(`${this.ApiUrl}/${id}`);
  }
  UpdateSchedule(id:number,schedule:Schedule):Observable<Schedule>{

    return this.http.put<Schedule>(`${this.ApiUrl}/${id}`,schedule)
  }
  addSchedule(schedule:Schedule):Observable<Schedule>{

    return this.http.post<Schedule>(`${this.ApiUrl}`,schedule)
  }
  deleteSchedule(id:number):Observable<Schedule>{
    return this.http.delete<Schedule>(`${this.ApiUrl}/${id}`);
  }
}
