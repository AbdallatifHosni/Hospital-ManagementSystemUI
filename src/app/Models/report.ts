export class Report {
    constructor(
        public reportId:number=0,
        public status:string='',
        public reportName:string='',
        public reportDescription:string='',
        public reportType:string='',
        public doctorId :number=0,
        public patientId:number=0,


    ){}

}
/*
reportId	
status	string
nullable: true
reportName	string
nullable: true
reportDescription	string
nullable: true
reportType	string
nullable: true
doctorId	
patientId
*/