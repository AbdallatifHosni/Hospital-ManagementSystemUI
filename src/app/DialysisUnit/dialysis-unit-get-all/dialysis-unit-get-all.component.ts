import { Component } from '@angular/core';
import { DialysisUnit } from 'src/app/Models/dialysis-unit';
import { DialysisUnitService } from 'src/app/Services/dialysis-unit.service';
@Component({
  selector: 'app-dialysis-unit-get-all',
  templateUrl: './dialysis-unit-get-all.component.html',
  styleUrls: ['./dialysis-unit-get-all.component.css']
})
export class DialysisUnitGetAllComponent {
  dialysisUnits: DialysisUnit[] = [];

  constructor(private dialysisUnitService: DialysisUnitService) {}

  ngOnInit(): void {
    this.dialysisUnitService.getDialysisUnits().subscribe(datas => {
      this.dialysisUnits = datas;
    });
  }


}
