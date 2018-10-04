import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Test, GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http'
import { TicketSlotPage } from '../ticket-slot/ticket-slot';
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

  test:Test;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.test = new Test();
  }

  ionViewDidEnter() {
    // this.http.get<Test>(GlobalVarible.host + "/api/Test/List")
    // .subscribe((data) => {
    //   this.test = data;
    // });
  }

  Create(){
    this.test.ans = this.test.first + this.test.second;
    this.http.post(GlobalVarible.host + "/api/Test/Create", JSON.stringify(this.test), GlobalVarible.httpOptions)
    .subscribe(data => {
      this.navCtrl.push(TicketSlotPage);
    });
  }

  NextList(){
    this.navCtrl.push(TicketSlotPage);
  }
}
