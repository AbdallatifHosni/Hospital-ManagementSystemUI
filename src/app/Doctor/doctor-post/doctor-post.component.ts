import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { Gender } from 'src/app/Models/gender';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-post',
  templateUrl: './doctor-post.component.html',
  styleUrls: ['./doctor-post.component.css']
})
export class DoctorPostComponent {
doctor:Doctor=new Doctor();
genderoptions=Gender;
submitted=false;
constructor(private _service:DoctorService,private rout:Router){}
onSubmit(){
  this._service.addDoctor(this.doctor).subscribe(data=>{
    this.doctor=data;
    this.submitted=true;
    this.rout.navigateByUrl("/Doctors");
  })


}
}
