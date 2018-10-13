import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { TicketScrathPage } from '../ticket-scrath/ticket-scrath';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name:any;
  password:any;
  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.name = null;
    this.password = null;
}

  nextHome(){
    this.http.get<User>(GlobalVarible.host + "/api/User/Get/" + this.name + "/" + this.password)
    .subscribe(data => {
      //TODO
      if(data == null){
        alert("Not found");
      }else{
        this.navCtrl.push(TabsPage, {iduser:data.id});
      }
      
    });
  }
  register(){
    this.navCtrl.push(TicketScrathPage);
  }
}
