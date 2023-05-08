import { Component, OnInit } from '@angular/core';
import { Nurse } from 'src/app/Models/nurse';
import { NurseService } from 'src/app/Services/nurse.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-nurse-delete',
  templateUrl: './nurse-delete.component.html',
  styleUrls: ['./nurse-delete.component.css']
})
export class NurseDeleteComponent implements OnInit{
  nurse:Nurse=new Nurse();
  constructor ( private _Service:NurseService , private Ac:ActivatedRoute , private route:Router){}
  delete(){
    this._Service.delete(this.nurse.id).subscribe(data=>{
      this.nurse=data;
    })

  }
  ngOnInit(): void {
    this.Ac.params.subscribe(param=>{
      this._Service.getNurseById(param['id']).subscribe((data)=>{
        this.nurse=data;

      })

    })
    
  }
}
