import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { PocketMoneyPage } from '../pocket-money/pocket-money';
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
  user:User;
  coinCount:any;
  chanceMoney:any = 0;
  color:any = "green";
  constructor(public navCtrl: NavController, public navParams: NavParams,public shared: SharedDataProvider,
    public http: HttpClient) {
    this.user = this.shared.User;
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
  }

  checkMoney(){
    if(this.coinCount*10 > this.user.money){
      this.chanceMoney = this.coinCount * 10;
      this.color = "red";
    }else{
      this.chanceMoney = this.coinCount * 10;
      this.color = "green";
    }
  }
  
  buyCoin(){
    if(this.coinCount*10 > this.user.money ){
        alert("Your money is not enough.");
    }else if(this.coinCount == null || this.coinCount == 0){
        alert("Your coin null");
    }
    else{
      this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
      .subscribe((data) => {
        this.user = data;
        this.user.money = (Number)(this.user.money) - (Number)(this.chanceMoney);
        this.user.coin = (Number)(this.user.coin) + (Number)(this.coinCount);
        this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
          .subscribe(data => {
            
            alert("success !!!");
          });
      });
    }
  }

  nextPop(){
    this.navCtrl.pop();
  }



}
