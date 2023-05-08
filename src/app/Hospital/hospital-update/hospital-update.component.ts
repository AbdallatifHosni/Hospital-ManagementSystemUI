import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalService } from 'src/app/Services/hospital.service';

@Component({
  selector: 'app-hospital-update',
  templateUrl: './hospital-update.component.html',
  styleUrls: ['./hospital-update.component.css']
})
export class HospitalUpdateComponent implements OnInit {
  hospital:Hospital=new Hospital();
  constructor(private _service:HospitalService , private AC:ActivatedRoute ,private route:Router){}

  Update(){
    this._service.UpdateHospital(this.hospital.id,this.hospital).subscribe(data=>{

      this.hospital=data;
      this.route.navigateByUrl("/Hospitals");
    })

  }

  ngOnInit(): void {
    this.AC.params.subscribe(q=>{
      this._service.getHospitalById(q['id']).subscribe((ss)=>{

        this.hospital=ss;
      })


    })
    
  }

}
