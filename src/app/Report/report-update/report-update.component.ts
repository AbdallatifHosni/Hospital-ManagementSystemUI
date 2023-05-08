import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/Models/report';
import { ReportServiceService } from 'src/app/Services/report-service.service';

@Component({
  selector: 'app-report-update',
  templateUrl: './report-update.component.html',
  styleUrls: ['./report-update.component.css']
})
export class ReportUpdateComponent  implements OnInit{
  report:Report=new Report();
  constructor(private AC:ActivatedRoute,private _service:ReportServiceService,private route:Router){}

  update(){
    this._service.Update(this.report.doctorId,this.report).subscribe((data)=>{
      this.report=data;
      this.route.navigateByUrl('/');


    })

  }
  ngOnInit(): void {
    this.AC.params.subscribe((param)=>{
      this._service.GetById(param['id']).subscribe((data)=>{
        this.report=data;

      })


    })

    
  }
}
