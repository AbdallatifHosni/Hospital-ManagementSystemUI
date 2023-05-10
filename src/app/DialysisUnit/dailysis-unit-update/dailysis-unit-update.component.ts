import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialysisUnit } from 'src/app/Models/dialysis-unit';
import { DialysisUnitService } from 'src/app/Services/dialysis-unit.service';

@Component({
  selector: 'app-dailysis-unit-update',
  templateUrl: './dailysis-unit-update.component.html',
  styleUrls: ['./dailysis-unit-update.component.css']
})
export class DailysisUnitUpdateComponent implements OnInit{
  dialysisUnit:DialysisUnit=new DialysisUnit();
  constructor(private dialysisUnitService: DialysisUnitService,private AC:ActivatedRoute,private router: Router) {}

  Update(){
  this.dialysisUnitService.updateDialysisUnit(this.dialysisUnit,this.dialysisUnit.dialysisUnitId)
  .subscribe(data=>{
    this.dialysisUnit=data;
    this.router.navigateByUrl("/DailysisUnits"); 
  })

}
 ngOnInit(): void {
  this.AC.params.subscribe(param=>{
    this.dialysisUnitService.getDialysisUnitsById(this.dialysisUnit.dialysisUnitId)
    .subscribe(data=>{
      this.dialysisUnit=data;
    })

  })
   
 }
}
