import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-get-by-id',
  templateUrl: './doctor-get-by-id.component.html',
  styleUrls: ['./doctor-get-by-id.component.css']
})
export class DoctorGetByIdComponent implements OnInit{
  doctor:Doctor=new Doctor();
  constructor(private _service:DoctorService,private route:Router, private AC:ActivatedRoute){}

ngOnInit(): void {
  this.AC.params.subscribe(e=>{
    this._service.getDoctorById(e['id']).subscribe(data=>{
      this.doctor=data;

    })

    
  })
}

}
