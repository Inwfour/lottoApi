import { DateTime } from "ionic-angular/umd";
export class Ticket {
    id:string;
    refid:string;
    no:number;
    game:string;
    serialnumber:number;
    date:DateTime;
    isplayed:boolean;
    setnumber:number;
    num:number[];
}