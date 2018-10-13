import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http';
import { TicketSlotPage } from '../ticket-slot/ticket-slot';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
/**
 * Generated class for the TicketScrathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-scrath',
  templateUrl: 'ticket-scrath.html',
})
export class TicketScrathPage {

  user:User;
  ticket:Ticket;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.user = new User();
    this.ticket = new Ticket();
  }

  ionViewDidEnter() {
    // this.http.get<Test>(GlobalVarible.host + "/api/Test/List")
    // .subscribe((data) => {
    //   this.test = data;
    // });
  }

  Create(){
   
    this.http.post(GlobalVarible.host + "/api/User/Create", JSON.stringify(this.user), GlobalVarible.httpOptions)
    .subscribe(data => {
      this.navCtrl.push(TicketSlotPage);
    });
  }
  CreateT(){
    this.http.post(GlobalVarible.host + "/api/Ticket/Create", JSON.stringify(this.ticket), GlobalVarible.httpOptions)
    .subscribe(data => {
      this.navCtrl.push(TicketSlotPage);
    });
  }

  NextList(){
    this.navCtrl.push(TicketSlotPage);
  }
}
