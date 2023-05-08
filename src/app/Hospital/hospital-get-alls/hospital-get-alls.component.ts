import { Component } from '@angular/core';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalService } from 'src/app/Services/hospital.service';

@Component({
  selector: 'app-hospital-get-alls',
  templateUrl: './hospital-get-alls.component.html',
  styleUrls: ['./hospital-get-alls.component.css']
})
export class HospitalGetAllsComponent {
hospital: Hospital[]=[];

ngOnInit() {
  this.hospitalService.getHospitals()
    .subscribe(data => {
      this.hospital = data;
     // console.log(data);
    });
  }
    constructor(public hospitalService: HospitalService) {}
}


