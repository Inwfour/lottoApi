import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketPage } from '../ticket/ticket';

/**
 * Generated class for the ScrathGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scrath-game',
  templateUrl: 'scrath-game.html',
})
export class ScrathGamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrathGamePage');
  }

  nextTicket(){
    this.navCtrl.push(TicketPage);
  }

}
