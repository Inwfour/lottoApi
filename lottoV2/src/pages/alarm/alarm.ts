import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { User } from '../../models/user';
import { History } from '../../models/history';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the AlarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html',
})
export class AlarmPage {
  user:User;
  history:History;
  sta:boolean = false;
 
  constructor(public shared:SharedDataProvider,public http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
   this.user = shared.User;
  }

  ionViewWillEnter() {
    this.http.get<History>(GlobalVarible.host + "/api/History/List")
    .subscribe((data) => {
      this.history = data;
    });
  }



}
