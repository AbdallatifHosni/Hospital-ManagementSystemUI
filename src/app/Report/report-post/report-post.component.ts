import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Report } from 'src/app/Models/report';
import { ReportServiceService } from 'src/app/Services/report-service.service';

@Component({
  selector: 'app-report-post',
  templateUrl: './report-post.component.html',
  styleUrls: ['./report-post.component.css']
})
export class ReportPostComponent {
  report:Report=new Report();
  constructor(private _service:ReportServiceService,private route:Router) {}
  add(){
    this._service.addReport(this.report).subscribe(data=>{
      this.report=data;
      this.route.navigateByUrl('/');
    })
  }

}
