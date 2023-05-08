import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nurse } from 'src/app/Models/nurse';
import { NurseService } from 'src/app/Services/nurse.service';
import { Gender } from 'src/app/Models/gender';
@Component({
  selector: 'app-nurse-post',
  templateUrl: './nurse-post.component.html',
  styleUrls: ['./nurse-post.component.css']
})
export class NursePostComponent implements OnInit{
  unrse:Nurse=new Nurse();
  genderOptions = Gender; // to use in the template
  submitted = false;
  constructor(private _Service:NurseService,private rout:Router  ) { }

  addnurse(){
    this._Service.addNurse(this.unrse).subscribe(data=>{
      this.unrse=data;

    })
  }
ngOnInit(): void {
  
}
}
