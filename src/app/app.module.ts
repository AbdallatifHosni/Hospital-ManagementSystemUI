
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HospitalPostComponent } from './Hospital/hospital-post/hospital-post.component';
import { HospitalGetAllsComponent } from './Hospital/hospital-get-alls/hospital-get-alls.component';
import { Hospital } from './Models/hospital';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialysisUnitGetAllComponent } from './DialysisUnit/dialysis-unit-get-all/dialysis-unit-get-all.component';
import { DialysisUnitPostComponent } from './DialysisUnit/dialysis-unit-post/dialysis-unit-post.component';
import { PatientGetAllComponent } from './Patient/patient-get-all/patient-get-all.component';
import { PatientPostComponent } from './Patient/patient-post/patient-post.component';
import { PatientGetByIdComponent } from './Patient/patient-get-by-id/patient-get-by-id.component';
import { DoctorGetAllComponent } from './Doctor/doctor-get-all/doctor-get-all.component';
import { DoctorGetByIdComponent } from './Doctor/doctor-get-by-id/doctor-get-by-id.component';
import { DoctorPostComponent } from './Doctor/doctor-post/doctor-post.component';
import { NurseGetAllComponent } from './Nurse/nurse-get-all/nurse-get-all.component';
import { NursePostComponent } from './Nurse/nurse-post/nurse-post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Home/home/home.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HospitalGetByIdComponent } from './Hospital/hospital-get-by-id/hospital-get-by-id.component';
import { HospitalUpdateComponent } from './Hospital/hospital-update/hospital-update.component';
import { HospitalDeleteComponent } from './Hospital/hospital-delete/hospital-delete.component';
import { DialysisUnitGetByIdComponent } from './DialysisUnit/dialysis-unit-get-by-id/dialysis-unit-get-by-id.component';
import { DoctorUpdateComponent } from './Doctor/doctor-update/doctor-update.component';
import { DailysisUnitUpdateComponent } from './DialysisUnit/dailysis-unit-update/dailysis-unit-update.component';
import { NurseDeleteComponent } from './Nurse/nurse-delete/nurse-delete.component';
import { NurseUpdateComponent } from './Nurse/nurse-update/nurse-update.component';
import { PatientUpdateComponent } from './Patient/patient-update/patient-update.component';
import { PatientDeleteComponent } from './Patient/patient-delete/patient-delete.component';
import { GetByIdComponent } from './Nurse/get-by-id/get-by-id.component';
import { DoctorDeleteComponent } from './Doctor/doctor-delete/doctor-delete.component';
import { ReportGetAllComponent } from './Report/report-get-all/report-get-all.component';
import { ReportGetByIdComponent } from './Report/report-get-by-id/report-get-by-id.component';
import { ReportDeleteComponent } from './Report/report-delete/report-delete.component';
import { ReportUpdateComponent } from './Report/report-update/report-update.component';
import { ReportPostComponent } from './Report/report-post/report-post.component';
import { ScheduleGetAllComponent } from './Schedule/schedule-get-all/schedule-get-all.component';
import { ScheduleGetByIdComponent } from './Schedule/schedule-get-by-id/schedule-get-by-id.component';
import { ScheduleUpdateComponent } from './Schedule/schedule-update/schedule-update.component';
import { SchedulePostComponent } from './Schedule/schedule-post/schedule-post.component';
import { ScheduleDeleteComponent } from './Schedule/schedule-delete/schedule-delete.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { HomeContentComponent } from './Home/home-content/home-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DialysisUnitGetAllComponent,
    DialysisUnitPostComponent,
    PatientGetAllComponent,
    PatientPostComponent,
    PatientGetByIdComponent,
    DoctorGetAllComponent,
    DoctorGetByIdComponent,
    DoctorPostComponent,
    NurseGetAllComponent,
    NursePostComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HospitalGetAllsComponent,
    HospitalPostComponent,
    HospitalGetByIdComponent,
    DialysisUnitPostComponent,
    PatientPostComponent,
    HospitalUpdateComponent,
    HospitalDeleteComponent,
    DialysisUnitGetByIdComponent,
    DoctorUpdateComponent,
    DailysisUnitUpdateComponent,
    NurseDeleteComponent,
    NurseUpdateComponent,
    PatientUpdateComponent,

    PatientDeleteComponent,
    GetByIdComponent,
    DoctorDeleteComponent,
    ReportGetAllComponent,
    ReportGetByIdComponent,
    ReportDeleteComponent,
    ReportUpdateComponent,
    ReportPostComponent,
    ScheduleGetAllComponent,
    ScheduleGetByIdComponent,
    ScheduleUpdateComponent,
    SchedulePostComponent,
    ScheduleDeleteComponent,
    MainLayoutComponent,
    LayoutHeaderComponent,
    HomeContentComponent,

   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule 
  
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
 JwtHelperService,
 //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
    
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
