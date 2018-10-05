import { HttpHeaders } from "@angular/common/http";
import { DateTime } from "../../node_modules/ionic-angular/umd";

export class User {
    id: string;
    img: string;
    name: string;
    password: number;
    eth: number;
    money: number;
    coin: number;
    ticket: number;
}

// export class Ticket {
//     datestart:DateTime;
//     dateuse:DateTime;
//     serial:number;
//     setnumber:number;
//     statusticket:number;
// }

export class GlobalVarible {
    static host: string = "https://localhost:5001";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}