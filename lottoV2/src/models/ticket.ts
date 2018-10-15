import { DateTime } from "ionic-angular/umd";
export class Ticket {
    id:string;
    refid:string;
    game:string;
    serialnumber:number;
    date:DateTime;
    status:boolean;
    statusgame:string;
    setnumber:number;
}