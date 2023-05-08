import { Component } from '@angular/core';
import { DialysisUnit } from 'src/app/Models/dialysis-unit';
import { DialysisUnitService } from 'src/app/Services/dialysis-unit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialysis-unit-post',
  templateUrl: './dialysis-unit-post.component.html',
  styleUrls: ['./dialysis-unit-post.component.css']
})
export class DialysisUnitPostComponent  {
  dialysisUnit:DialysisUnit=new DialysisUnit();
  constructor(private dialysisUnitService: DialysisUnitService,private router: Router) {}

  onSubmit() {
  this.dialysisUnitService.createDialysisUnit(this.dialysisUnit).subscribe(data => {
      this.dialysisUnit=data;
      console.log(data);
      this.router.navigateByUrl('/DailysisUnits');
     
    });
  }
  }
