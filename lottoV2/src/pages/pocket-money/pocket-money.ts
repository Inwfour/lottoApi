import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  History:{
    "Date":"1111111111",
    "Amount":"20",
    "Type":"Buy Coin"
  };
  History1 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.History1 = [
    {
      'Date': '22/08/18',        
      'Amount': '20',
      'Type': 'Sell Coin',
      
    },
    {
      'Date': '21/08/18',        
      'Amount': '100',
      'Type': 'Buy Coin',
    },
    {
      'Date': '20/08/18',        
      'Amount': '5',
      'Type': 'Buy Ticket',
    },
    {
      'Date': '19/08/18',        
      'Amount': '200',
      'Type': 'Scrath Poker',
    },
  ]

    
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
