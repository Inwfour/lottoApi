import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';


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
  game: any;
  rand: any;
  setNumber: any;
  Num: number[];
  constructor(public Toast:ToastController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public sharedData: SharedDataProvider) {
      this.game = "ScratchPoker";
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }
  presentToast(msg) {
    let toast = this
      .Toast
      .create({message: msg, duration: 2000});
    toast.present();
  }

  nextPop() {
    this.navCtrl.pop();
  }
  randomSetNumder() {
    this.rand = (Math.floor((Math.random() * 12) + 1)).toString();
    
  }
  checkSetNumber() {
    this.randomSetNumder();
    this.setNumber = this.rand;
    
    switch (this.setNumber) {
      case "1": {
        this.Num = [1, 32, 42, 13, 5];
        this.presentToast("case 1");
        console.log(this.Num);
        break;
      }
      case "2": {
        this.Num = [26, 19, 8, 28, 36];
        this.presentToast("case 2");
        console.log(this.Num);
        
        break;
      }
      case "3": {
        this.Num = [6, 2, 39, 40, 22];
        this.presentToast("case 3");
        console.log(this.Num);
        break;
      }
      case "4": {
        this.Num = [24, 52, 31, 21, 5];
        this.presentToast("case 4");
        console.log(this.Num);
        break;
      }
      case "5": {
        this.Num = [25, 29, 3, 40, 16];
        this.presentToast("case 5");
        console.log(this.Num);
        break;
      }case "6": {
        this.Num = [22, 12, 33, 14, 2];
        this.presentToast("case 5");
        console.log(this.Num);
        break;
      }case "7": {
        this.Num = [41, 1, 35, 18, 51];
        this.presentToast("case 5");
        console.log(this.Num);
        break;
      }
      case "8": {
        this.Num = [2, 1, 35, 28, 51];
        this.presentToast("case 5");
        console.log(this.Num);
        break;
      }case "9": {
        this.Num = [44, 40, 35, 31, 21];
        this.presentToast("case 5");
        console.log(this.Num);
        break;
      }case "10": {
        this.Num = [22, 37, 27, 17, 9];
        this.presentToast("case 5");
        console.log(this.Num);
        break;
      }case "11": {
        this.Num = [13, 1, 35, 18, 52];
        this.presentToast("case 5");
        console.log(this.Num);
        break;
      }case "12": {
        this.Num = [37, 38, 21, 11, 3];
        this.presentToast("case 5");
        console.log(this.Num);
        break;
      }
      default: { 
        this.presentToast("case is not");
        break;              
     } 
    }
  }

  nextConfirm() {
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
            this.checkSetNumber();
            this.sharedData.RandomNumbers = this.Num;
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
