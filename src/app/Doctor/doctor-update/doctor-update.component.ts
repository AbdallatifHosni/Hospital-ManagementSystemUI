import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { Gender } from 'src/app/Models/gender';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {
  doctor:Doctor= new Doctor();
  genderoptions=Gender;
 submitted=false;
  constructor( private _Service:DoctorService, private AC:ActivatedRoute){}


  update()
  {
    this._Service.updateDoctor(this.doctor.doctorId,this.doctor).subscribe(data=>{
      this.doctor=data;
    })

  }
  ngOnInit(): void 
  {
    this.AC.params.subscribe(param=>{
      this._Service.getDoctorById(this.doctor.doctorId).subscribe(data=>{
        this.doctor=data;
      })


    })

    
  }
}
