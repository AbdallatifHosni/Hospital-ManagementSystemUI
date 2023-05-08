import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialysisUnit } from 'src/app/Models/dialysis-unit';
import { DialysisUnitService } from 'src/app/Services/dialysis-unit.service';

@Component({
  selector: 'app-dialysis-unit-get-by-id',
  templateUrl: './dialysis-unit-get-by-id.component.html',
  styleUrls: ['./dialysis-unit-get-by-id.component.css']
})
export class DialysisUnitGetByIdComponent implements OnInit {
  dailysisUnit:DialysisUnit=new DialysisUnit();
  constructor(private _service:DialysisUnitService,private AC:ActivatedRoute){}
ngOnInit(): void {
  this.AC.params.subscribe(param=>{
    this._service.getDialysisUnitsById(param['id']).subscribe(data=>{
      this.dailysisUnit=data;

      
    })


  })

  
}
}
