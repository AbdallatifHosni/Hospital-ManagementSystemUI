import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';
import { Gender } from 'src/app/Models/gender';
@Component({
  selector: 'app-patient-post',
  templateUrl: './patient-post.component.html',
  styleUrls: ['./patient-post.component.css']
})
export class PatientPostComponent {
  patient:Patient=new Patient();
  genderOptions = Gender; // to use in the template
  submitted = false;
  constructor(private _Service:PatientService , private _route:Router) { }
  onSubmit(){
    this._Service.addPatient(this.patient).subscribe(data=>
      {
        this.patient=data;

        console.log(this.patient.gender);
        this._route.navigateByUrl('/patients');



      })


  }

}
