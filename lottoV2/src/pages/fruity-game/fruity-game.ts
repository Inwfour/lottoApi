import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketPage } from '../ticket/ticket';

/**
 * Generated class for the FruityGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fruity-game',
  templateUrl: 'fruity-game.html',
})
export class FruityGamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruityGamePage');
  }
  nextTicket(){
    this.navCtrl.push(TicketPage);
  }

}
