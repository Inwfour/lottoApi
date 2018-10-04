import { HttpHeaders } from "@angular/common/http";
export class Test{
    id:string;
    first:number;
    second:number;
    ans:number;
}
export class GlobalVarible {
    static host: string = "https://localhost:5001";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}