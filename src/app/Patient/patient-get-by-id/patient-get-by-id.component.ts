import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient-get-by-id',
  templateUrl: './patient-get-by-id.component.html',
  styleUrls: ['./patient-get-by-id.component.css']
})
export class PatientGetByIdComponent implements OnInit {
  patient : Patient=new Patient();
  constructor( private _Service:PatientService,private AC:ActivatedRoute){}
  
  ngOnInit(): void {
    this.AC.params.subscribe(param=>{
      this._Service.getPatientById(param['id']).subscribe(data=>{

        this.patient=data;
      })
    })
    
  }

}
