import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';

/*
  Generated class for the SharedDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedDataProvider {
  public RandomNumbers: number[] = [];
  public User:User = new User();
  public Ticket:Ticket = new Ticket();

  constructor(public http: HttpClient) {
    console.log('Hello SharedDataProvider Provider');
  }



 

}
