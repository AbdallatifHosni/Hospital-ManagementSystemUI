import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';
@Component({
  selector: 'app-patient-get-all',
  templateUrl: './patient-get-all.component.html',
  styleUrls: ['./patient-get-all.component.css']
})
export class PatientGetAllComponent implements OnInit{
  patients :Patient[]=[];
  constructor(private patientService: PatientService) { }

ngOnInit(): void {
  this.patientService.getPatients().subscribe(data => {
    
    this.patients=data;


  })
}
  

}
/*ngOnInit() {
  this.hospitalService.getHospitals()
    .subscribe(data => {
      this.hospital = data;
     // console.log(data);
    });
  }*/