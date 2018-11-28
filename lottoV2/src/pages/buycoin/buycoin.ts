import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { History } from '../../models/history';
import { GlobalVarible } from '../../app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { PocketMoneyPage } from '../pocket-money/pocket-money';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the BuycoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buycoin',
  templateUrl: 'buycoin.html',
})
export class BuycoinPage {
  user: User;
  history: History;
  coinCount: any;
  time: string = new Date().toLocaleTimeString();
  date: string = new Date().toLocaleDateString();
  chanceMoney: any = 0;
  color: any = "green";
  noHistory:any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedDataProvider,
    public http: HttpClient) {
    this.user = this.shared.User;
    this.history = this.shared.History;
    this.history.refid = this.user.id;
  }

  ionViewDidLoad() {
    console.log("test");
    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
      .subscribe((data) => {
        this.user = data;
      });
  }

  ionViewWillEnter() {
    console.log("test");
    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
      .subscribe((data) => {
        this.user = data;
      });

      this.http.get<History[]>(GlobalVarible.host + "/api/History/GetHistory/" + this.user.id + "/1")
      .subscribe((data) => {
        this.noHistory = data.length;
      });
  }

  checkMoney() {
    if (this.coinCount * 10 > this.user.money) {
      this.chanceMoney = this.coinCount * 10;
      this.color = "red";
    } else {
      this.chanceMoney = this.coinCount * 10;
      this.color = "green";
    }
  }

  buyCoin() {
    if (this.coinCount > 0) {
      if (this.coinCount * 10 > this.user.money) {
        let alert = this.alertCtrl.create({
          title: 'FAILED !!!',
          subTitle: 'Your money is not enough.',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.navCtrl.push(TabsPage, { checknum: 1 });
            }
          }]
        });
        alert.present();

      } else if (this.coinCount == null || this.coinCount == 0) {
        let alert = this.alertCtrl.create({
          title: 'FAILED !!!',
          subTitle: 'Please check coin.',
          buttons: ['OK']
        });
        alert.present();
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'CONFIRM',
          message: 'Buy ' + this.coinCount + ' Coin',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {

              }
            },
            {
              text: 'Buy',
              handler: () => {
                this.history.date = this.date;
                this.history.time = this.time;
                this.history.type = 1;
                this.history.no = this.noHistory + 1;

                this.history.img = "../../assets/imgs/Coin.png"
                this.history.amouth = this.coinCount;
                this.history.game = "coin";
                // this.history.detailgame = "Use " + this.chanceMoney + " Baht";
                this.history.detailgame = "Buy";
                this.http.post(GlobalVarible.host + "/api/History/Create", JSON.stringify(this.history), GlobalVarible.httpOptions)
                  .subscribe(data => {
                  });
                this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
                  .subscribe((data) => {
                    this.user = data;
                    this.user.money = (Number)(this.user.money) - (Number)(this.chanceMoney);
                    this.user.coin = (Number)(this.user.coin) + (Number)(this.coinCount);
                    this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
                      .subscribe(data => {
                        this.navCtrl.push(TabsPage, { checknum: 1 });
                      }); //END API EDIT
                  }); //END API SEARCH
              }
            }
          ]
        });
        alert.present();
      } //END ELSE ALERT CONFIRM
    } else {
      let alert = this.alertCtrl.create({
        title: 'FAILED !!!',
        subTitle: 'Please check coin.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  nextPop() {
    this.navCtrl.pop();
  }



}
