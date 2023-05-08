import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nurse } from 'src/app/Models/nurse';
import { NurseService } from 'src/app/Services/nurse.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit{
 constructor(private _Service:NurseService,private Ac:ActivatedRoute,private route:Router){}
 nurse:Nurse=new Nurse();
 
  ngOnInit(): void {
    this.Ac.params.subscribe(param=>{
      this._Service.getNurseById(param['id']).subscribe(data=>{
        this.nurse=data;
      })
    })

    
  }


}
