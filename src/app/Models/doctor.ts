import { Gender } from 'src/app/Models/gender';

export class Doctor {

doctorId:number;
name :string;
email:string;
phone:string;
gender:Gender;
position:string
dialysisunitId:number;
  constructor()
    {
    this.dialysisunitId=0;
    this.doctorId=0;
    this.email='';
    this.gender=0;
    this.phone='';
    this.position='';
    this.name='';
    }


}
