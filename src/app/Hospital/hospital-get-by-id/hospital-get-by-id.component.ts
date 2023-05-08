import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospitalService } from 'src/app/Services/hospital.service';
import { Hospital } from 'src/app/Models/hospital';
@Component({
  selector: 'app-hospital-get-by-id',
  templateUrl: './hospital-get-by-id.component.html',
  styleUrls: ['./hospital-get-by-id.component.css']
})
export class HospitalGetByIdComponent implements OnInit{
  
  hospital : Hospital =new Hospital();

  constructor( private Hservice:HospitalService,private arParams:ActivatedRoute){}

  ngOnInit(): void {

    this.arParams.params.subscribe(pp => { 

       this.Hservice.getHospitalById(pp['id']).subscribe(ll=>{
        this.hospital=ll;});
    
      })

    
  }
}
