import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';
import { Gender } from 'src/app/Models/gender';
@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements  OnInit{
  patient:Patient=  new Patient();
  genderOptions = Gender; // to use in the template
  submitted = false;
  constructor( private _Service:PatientService,private AC:ActivatedRoute,private route:Router){}
  update(){
    this._Service.Update(this.patient.patientId,this.patient).subscribe(data=>{
      this.patient=data;
      this.route.navigateByUrl("/patients");


    })


  }



  ngOnInit(): void {
    this.AC.params.subscribe(e=>{
      this._Service.getPatientById(e['id']).subscribe(data=>{
        this.patient=data;


      })


    })
    
  }

}
