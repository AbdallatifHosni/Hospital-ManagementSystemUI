import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/Models/report';
import { ReportServiceService } from 'src/app/Services/report-service.service';

@Component({
  selector: 'app-report-delete',
  templateUrl: './report-delete.component.html',
  styleUrls: ['./report-delete.component.css']
})
export class ReportDeleteComponent implements OnInit {
report:Report=new Report();
constructor(private _service:ReportServiceService,private route:Router,private AC:ActivatedRoute){}

onSubmit(){
  this._service.deleteReport(this.report.reportId).subscribe(data=>{

    this.route.navigateByUrl('/');
  })


}
ngOnInit(): void {
  this.AC.params.subscribe((param)=>{
    this._service.GetById(param['id']).subscribe(data=>{
      this.report=data;
    })
  })

  
}
}
