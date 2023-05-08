import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/Models/report';
import { ReportServiceService } from 'src/app/Services/report-service.service';

@Component({
  selector: 'app-report-get-by-id',
  templateUrl: './report-get-by-id.component.html',
  styleUrls: ['./report-get-by-id.component.css']
})
export class ReportGetByIdComponent implements OnInit{
  report:Report=new Report();
  constructor(private _service:ReportServiceService,private AC:ActivatedRoute){}

  ngOnInit(): void {
    this.AC.params.subscribe(param=>{
      this._service.GetById(this.report.reportId).subscribe(data=>{
        this.report=data;
      })

    })
    
  }

}
