import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/Services/hospital.service';
import { Hospital } from 'src/app/Models/hospital';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-hospital-post',
  templateUrl: './hospital-post.component.html',
  styleUrls: ['./hospital-post.component.css']
})
export class HospitalPostComponent {
  constructor(private hospitalService: HospitalService,private router:Router ) {}
  hospital: Hospital =new Hospital();

  onSubmit()
   {
    this.hospitalService.addHospital(this.hospital)
      .subscribe(data => {
       this. hospital=data;
        console.log(data);
        this.router.navigateByUrl("/Hospitals");
      
        
      });
    }



  }

