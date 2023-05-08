import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit{
  patient:Patient=new Patient();
  constructor(private _Service:PatientService,private AC:ActivatedRoute){}
  delete(){
    this._Service.deletePatient(this.patient.patientId).subscribe(data=>{
      this.patient=data;
    })


  }
ngOnInit(): void {
  this.AC.params.subscribe(param=>{
    this._Service.getPatientById(param['id']).subscribe(data=>{
      this.patient=data;
    })


  })

  
}
}
