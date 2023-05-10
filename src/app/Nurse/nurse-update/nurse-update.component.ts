import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from 'src/app/Models/gender';
import { Nurse } from 'src/app/Models/nurse';
import { NurseService } from 'src/app/Services/nurse.service';

@Component({
  selector: 'app-nurse-update',
  templateUrl: './nurse-update.component.html',
  styleUrls: ['./nurse-update.component.css']
})
export class NurseUpdateComponent {
  unrse:Nurse=new Nurse();
  genderOptions = Gender; // to use in the template
  submitted = false;
  constructor(private _Service:NurseService ,private Ac:ActivatedRoute, private rout : Router   ) { }

  update(){
    this._Service.update(this.unrse.id,this.unrse,).subscribe(data=>{
      this.unrse=data;
      this.rout.navigateByUrl(`/`);

    })
  }
ngOnInit(): void {
  this.Ac.params.subscribe(param=>{
    this._Service.update(this.unrse.id,this.unrse).subscribe(data=>{
      this.unrse=data;

    })

  })

  
}

}
