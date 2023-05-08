import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/Models/report';
import { ReportServiceService } from 'src/app/Services/report-service.service';

@Component({
  selector: 'app-report-get-all',
  templateUrl: './report-get-all.component.html',
  styleUrls: ['./report-get-all.component.css']
})
export class ReportGetAllComponent implements OnInit{
  reports:Report[]=[];
  constructor(private _service:ReportServiceService){}
  ngOnInit(): void {
    this._service.GetAllReports().subscribe((data)=>{
      this.reports=data;
    })

    
  }

}
