import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketPage } from '../ticket/ticket';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Ticket } from '../../models/ticket';

/**
 * Generated class for the ModalSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-success',
  templateUrl: 'modal-success.html',
})
export class ModalSuccessPage {
  selectedBlock: number[] = new Array();
  selectedSrc: string[] = new Array();
  ticket: Ticket;

  constructor(private shared: SharedDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.ticket = this.shared.Ticket;
  
    this.selectedBlock = navParams.get('selectedBlock');
    for (var i = 0; i < 5; i++) {
      this.selectedSrc.push("../../assets/card/" + this.selectedBlock[i] + ".png")
    }
    console.log(this.selectedBlock);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSuccessPage');
  }

  backToTicket(fs: string) {
    this.navCtrl.pop();
  }
}