import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
game:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
    this.game = "ScratchPoker";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  nextPop(){
    this.navCtrl.pop();
  }

  nextConfirm(){
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: '2 Ticket = 2 Coin',
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
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
