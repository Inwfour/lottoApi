import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { User } from '../../models/user';
/**
 * Generated class for the PocketMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pocket-money',
  templateUrl: 'pocket-money.html',
})
export class PocketMoneyPage {
  user:User;
  
  constructor(public shared:SharedDataProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.user = shared.User;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PocketMoneyPage');
  }
  show(item){
    {
      const alert = this.alertCtrl.create({
        title: item.Date + "<br>",
        subTitle: item.Amount + "<br>" +item.Type,       
        buttons: ['OK']
      });
      alert.present();
    }

  }
  alertMoney(){
    let alert = this.alertCtrl.create({
      title: 'Add Line',
      subTitle: '@lotto',
      
      buttons: ['OK']
    });
    alert.present();
  }

}
