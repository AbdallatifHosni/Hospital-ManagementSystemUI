import { Days } from "./days";

export class Schedule {
    constructor(
        public scheduleId:number=0,
        public numberOfTimes:number=0,
        public dateOfTreatment:string='',
        public days:Days,
        public patientId:number=0,
    ){}
}
/*
scheduleId	integer($int32)
numberOfTimes	integer($int32)
dateOfTreatment	string($date-time)
days	Daysinteger($int32)Enum:
Array [ 7 ]
patientId
*/
