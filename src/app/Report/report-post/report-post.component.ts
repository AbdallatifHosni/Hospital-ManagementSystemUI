import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Report } from 'src/app/Models/report';
import { FileUploadService } from 'src/app/Services/file-upload.service';
import { ReportServiceService } from 'src/app/Services/report-service.service';
@Component({
  selector: 'app-report-post',
  templateUrl: './report-post.component.html',
  styleUrls: ['./report-post.component.css']
})
export class ReportPostComponent {
  report:Report=new Report();
  constructor(private fileUploadService:FileUploadService,private http: HttpClient,private _service:ReportServiceService,private route:Router) {}
  //selectedFile: File = null;

 /* onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }
*/
file: any = null;
progress = 0;


onFileSelected(event:any) {
  this.file = event.target.files[0];
}

uploadFile() {
  this.fileUploadService.uploadFile(this.file).subscribe(
    progress => this.progress = progress,
    error => console.error(error)
  );
  }
  onSubmit(){
    const formData = new FormData();
    this._service.addReport(this.report).subscribe(data=>{
      this.report=data;
      this.route.navigateByUrl('/Reports');
    });
  }


}

