import { HttpHeaders } from "@angular/common/http";

export class User {
    id: string;
    img: string;
    name: string;
    password: number;
    eth: number;
    money: number;
    coin: number;
    Ticket: Ticket;
}

export class Ticket {
    
}

export class GlobalVarible {
    static host: string = "https://localhost:5001";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}