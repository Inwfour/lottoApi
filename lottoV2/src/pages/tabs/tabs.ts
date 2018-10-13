import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PocketMoneyPage } from '../pocket-money/pocket-money';
import { AlarmPage } from '../alarm/alarm';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  user:User;
tab1Root = HomePage;
tab1home= {iduser:this.user}
tab2Root = PocketMoneyPage;
tab3Root = AlarmPage;

  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.navParams.data.iduser)
    .subscribe(data => {
      this.user = data;
    });
  }


}
