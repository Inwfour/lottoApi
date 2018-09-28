import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  alarm1 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.alarm1 = [
      {
        'Date': '22/08/18',        
        'From': 'From John Wick',
        'Type': 'Sell 20 Coin',
        
      },
      {
        'Date': '21/08/18',        
        'From': 'From UserX',
        'Type': 'Buy 10 Coin',
      },
      {
        'Date': '20/08/18',        
        'From': 'From UserX',
        'Type': 'Buy 5 Ticket',
      },
      {
        'Date': '19/08/18',        
        'From': 'From Admin',
        'Type': 'Scrath 200 Poker',
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmPage');
  }

}
