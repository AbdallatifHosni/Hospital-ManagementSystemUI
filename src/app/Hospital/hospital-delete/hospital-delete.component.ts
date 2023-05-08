import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalService } from 'src/app/Services/hospital.service';


@Component({
  selector: 'app-hospital-delete',
  templateUrl: './hospital-delete.component.html',
  styleUrls: ['./hospital-delete.component.css']
})
export class HospitalDeleteComponent implements OnInit{
  hospital:Hospital=new Hospital();
  constructor( private hospitalService : HospitalService , private AC:ActivatedRoute,private route:Router){}

  
  deleteHospital() {
    
      this.hospitalService.deleteHospital(this.hospital.id).subscribe((data) => {
       this.route.navigateByUrl('/Hospitals');
      });
    }
  ngOnInit(): void {
    this.AC.params.subscribe(e=>{
      this.hospitalService.getHospitalById(e['id']).subscribe(d=>{
        this.hospital=d;
      })


    })

    
  }




  

}
