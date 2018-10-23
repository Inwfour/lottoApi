import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { PocketMoneyPage } from '../pocket-money/pocket-money';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the WebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-web',
  templateUrl: 'web.html',
})
export class WebPage {
  user: User;
  name: any;
  moneyFinal: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public shared: SharedDataProvider,
    public http: HttpClient,private alertCtrl: AlertController) {

  }
  ionViewWillEnter() {

  }


  change() {
    this.http.get<User>(GlobalVarible.host + "/api/User/GetUsername/" + this.name)
      .subscribe((data) => {
        this.user = data;
        this.user.money = (Number)(this.user.money) + (Number)(this.moneyFinal);
        this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
          .subscribe(data => {
            alert("success !!!");
            this.navCtrl.pop();
          });
      });

  }



}
