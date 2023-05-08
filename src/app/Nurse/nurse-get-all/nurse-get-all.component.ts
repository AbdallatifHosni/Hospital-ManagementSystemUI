import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nurse } from 'src/app/Models/nurse';
import { NurseService } from 'src/app/Services/nurse.service';

@Component({
  selector: 'app-nurse-get-all',
  templateUrl: './nurse-get-all.component.html',
  styleUrls: ['./nurse-get-all.component.css']
})
export class NurseGetAllComponent implements OnInit {
constructor(private _Service:NurseService,private route:Router ){}
nurses:Nurse[]=[];



ngOnInit(): void {
   this._Service.getAllNurse().subscribe((datas)=>{
    this.nurses=datas;

  })
  
}
}
