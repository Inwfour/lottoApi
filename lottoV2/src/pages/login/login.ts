import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { TicketScrathPage } from '../ticket-scrath/ticket-scrath';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data'
import { RegisterPage } from '../register/register';
import { WebPage } from '../web/web';
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
  name: any;
  password: any;
  constructor(private loadingCtrl:LoadingController, private alertCtrl:AlertController, private shared: SharedDataProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
    console.log("login-page")
    this.name = null;
    this.password = null;
  }

  nextHome() {
    if (this.name == null || this.name == "" || this.password == null || this.password == "") {
      let alert = this.alertCtrl.create({
        title: 'LOGIN FAILED',
        subTitle: 'Please check id and password.',
        buttons: ['OK']
      });
      alert.present();
    }else{

      this.http.get<User>(GlobalVarible.host + "/api/User/Get/" + this.name + "/" + this.password)
      .subscribe(data => {
        this.shared.User = data;
        if (data == null) {

          let alert = this.alertCtrl.create({
            title: 'LOGIN FAILED',
            subTitle: 'Not wrong your user.',
            buttons: ['OK']
          });
          alert.present();

        } else {
          this.navCtrl.push(TabsPage);
        }
      });

    }
  }


  register() {
    this.navCtrl.push(RegisterPage);
  }
  money() {
    this.navCtrl.push(WebPage);
  }
}

