import { Gender } from "./gender";

export class Patient {
  patientId:number
name:string;
gender:Gender;
email:string;
phone:string;
city:string ;
country: string;
dialysisUnitId:number;
  constructor()
  {
    this.patientId=0;
    this.dialysisUnitId=0;
    this.city='';
    this.country='';
    this.email='';
    this.gender=0;
    this.name='';
    this.phone='';
  }
}

  
