import { HospitalPostComponent } from './Hospital/hospital-post/hospital-post.component';
import { PatientGetByIdComponent } from './Patient/patient-get-by-id/patient-get-by-id.component';
import { HomeComponent } from './Home/home/home.component';
import { PatientGetAllComponent } from './Patient/patient-get-all/patient-get-all.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HospitalGetAllsComponent} from'./Hospital/hospital-get-alls/hospital-get-alls.component'
import { DialysisUnitGetAllComponent } from './DialysisUnit/dialysis-unit-get-all/dialysis-unit-get-all.component';
import { HospitalGetByIdComponent } from './Hospital/hospital-get-by-id/hospital-get-by-id.component';
import { DialysisUnitPostComponent } from './DialysisUnit/dialysis-unit-post/dialysis-unit-post.component';
import { PatientPostComponent } from './Patient/patient-post/patient-post.component';
import { DoctorPostComponent } from './Doctor/doctor-post/doctor-post.component';
import { HospitalUpdateComponent } from './Hospital/hospital-update/hospital-update.component';
import { HospitalDeleteComponent } from './Hospital/hospital-delete/hospital-delete.component';
import { DoctorGetAllComponent } from './Doctor/doctor-get-all/doctor-get-all.component';
import { DoctorGetByIdComponent } from './Doctor/doctor-get-by-id/doctor-get-by-id.component';
import { DialysisUnitGetByIdComponent } from './DialysisUnit/dialysis-unit-get-by-id/dialysis-unit-get-by-id.component';
import { PatientUpdateComponent } from './Patient/patient-update/patient-update.component';
import { PatientDeleteComponent } from './Patient/patient-delete/patient-delete.component';
import { NurseGetAllComponent } from './Nurse/nurse-get-all/nurse-get-all.component';
import { GetByIdComponent } from './Nurse/get-by-id/get-by-id.component';
import { NurseUpdateComponent } from './Nurse/nurse-update/nurse-update.component';
import { NursePostComponent } from './Nurse/nurse-post/nurse-post.component';
import { NurseDeleteComponent } from './Nurse/nurse-delete/nurse-delete.component';
import { DoctorUpdateComponent } from './Doctor/doctor-update/doctor-update.component';
import { DoctorDeleteComponent } from './Doctor/doctor-delete/doctor-delete.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthGuard } from './Services/auth-guard.service';
import { AuthRegistrationComponent } from './auth/auth-registration/auth-registration.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { ReportPostComponent } from './Report/report-post/report-post.component';
import { ReportGetByIdComponent } from './Report/report-get-by-id/report-get-by-id.component';
import { ReportUpdateComponent } from './Report/report-update/report-update.component';
import { ReportDeleteComponent } from './Report/report-delete/report-delete.component';
import { ReportGetAllComponent } from './Report/report-get-all/report-get-all.component';
const routes: Routes = [
 {path:'',component:MainLayoutComponent },
 {path:'regx',component:AuthRegistrationComponent},
 {path:'login',component:AuthLoginComponent},

      {path:'',component:HomeComponent,canActivateChild:[AuthGuard],children:[
        {path:'Hospitals', component: HospitalGetAllsComponent },
        {path:'Hospitals/Post',component:HospitalPostComponent},
        {path:'Hospitals/getById/:id',component:HospitalGetByIdComponent},
        {path:'Hospitals/update/:id',component:HospitalUpdateComponent},
        {path:'Hospitals/delete/:id',component:HospitalDeleteComponent},
      
        {path:'DailysisUnits',component:DialysisUnitGetAllComponent},
        {path:'DailysisUnits/Post',component:DialysisUnitPostComponent},
        {path:'DailysisUnits/getById/:id',component:DialysisUnitGetByIdComponent},
      
        {path:'patients' ,component: PatientGetAllComponent},
        {path:'patients/getById/:id',component:PatientGetByIdComponent},
        {path:'patients/Post',component:PatientPostComponent},
        {path:'patients/update/:id',component:PatientUpdateComponent},
        {path:'patients/delete/:id',component:PatientDeleteComponent},
        
        {path:'Nurses',component:NurseGetAllComponent},
        {path:'Nurses/Post',component:NursePostComponent},
        {path:'Nurses/getById/:id',component:GetByIdComponent},
        {path:'Nurses/update/:id',component:NurseUpdateComponent},
        {path:'Nurses/delete/:id',component:NurseDeleteComponent},
      
        {path:'Doctors',component:DoctorGetAllComponent},
        {path:'Doctors/Post',component:DoctorPostComponent},
        {path:'Doctors/getById/:id',component:DoctorGetByIdComponent},
        {path:'Doctors/update/:id',component:DoctorUpdateComponent},
        {path:'Doctors/delete/:id',component:DoctorDeleteComponent},

        {path:'Reports',component:ReportGetAllComponent},
        {path:'Reports/Post',component:ReportPostComponent},
        {path:'Reports/getById/:id',component:ReportGetByIdComponent},
        {path:'Reports/update/:id',component:ReportUpdateComponent},
        {path:'Reports/delete/:id',component:ReportDeleteComponent}


      ]},

      {path:'**',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
