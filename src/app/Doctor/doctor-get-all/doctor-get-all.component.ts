import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-get-all',
  templateUrl: './doctor-get-all.component.html',
  styleUrls: ['./doctor-get-all.component.css']
})
export class DoctorGetAllComponent implements OnInit{
doctors:Doctor[]=[];
constructor(private _service:DoctorService){}
  ngOnInit(): void {
    this._service.getDoctors().subscribe(data=>{

      this.doctors=data;
      
    })
  
}
}
