import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http'
import { TicketSlotPage } from '../ticket-slot/ticket-slot';
import { HomePage } from '../home/home';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.user = new User();
  }

  ionViewDidEnter() {
    // this.http.get<Test>(GlobalVarible.host + "/api/Test/List")
    // .subscribe((data) => {
    //   this.test = data;
    // });
  }

  Create(){
    console.log(this.user.name + "" + this.user.password);
    this.http.post(GlobalVarible.host + "/api/User/Create", JSON.stringify(this.user), GlobalVarible.httpOptions)
    .subscribe(data => {
      this.navCtrl.push(TicketSlotPage);
    });
  }

  NextList(){
    this.navCtrl.push(TicketSlotPage);
  }
}
