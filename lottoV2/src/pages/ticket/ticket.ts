import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
import { GlobalVarible } from '../../app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

  rand: any;
  setNumber: any;
  Num: number[];

  user: User;
  ticket: Ticket;
  sl:string;
  fs:string;
  ansgame:any;
  gamedetail:any;

  constructor(public Toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public shared: SharedDataProvider,
    public http: HttpClient) {
    // this.game = "ScratchPoker";
    this.ticket = this.shared.Ticket;
    this.user = this.shared.User;
    this.ticket.refid = this.user.id;
    this.sl = this.navParams.data.sl
    this.fs = this.navParams.data.fs
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  ionViewWillEnter() {
    if(this.sl == null){
      this.ticket.game = this.fs;
      this.gamedetail = "Fruity Slot"


    }else{
      this.ticket.game = this.sl;
      this.gamedetail = "Scratch Poker"

    }

  }

  presentToast(msg) {
    let toast = this
      .Toast
      .create({ message: msg, duration: 2000 });
    toast.present();
  }

  nextPop() {
    this.navCtrl.pop();
  }
  randomSetNumder() {
    this.rand = (Math.floor((Math.random() * 35) + 1)).toString();

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
      } case "6": {
        this.Num = [22, 12, 33, 14, 2];
        this.presentToast("case 6");
        console.log(this.Num);
        break;
      } case "7": {
        this.Num = [41, 1, 35, 18, 51];
        this.presentToast("case 7");
        console.log(this.Num);
        break;
      }
      case "8": {
        this.Num = [2, 1, 35, 28, 51];
        this.presentToast("case 8");
        console.log(this.Num);
        break;
      } case "9": {
        this.Num = [44, 40, 35, 31, 21];
        this.presentToast("case 9");
        console.log(this.Num);
        break;
      } case "10": {
        this.Num = [22, 37, 27, 17, 9];
        this.presentToast("case 10");
        console.log(this.Num);
        break;
      } case "11": {
        this.Num = [13, 1, 35, 18, 52];
        this.presentToast("case 11");
        console.log(this.Num);
        break;
      } case "12": {
        this.Num = [37, 38, 21, 11, 3];
        this.presentToast("case 12");
        console.log(this.Num);
        break;
      } case "13": {
        this.Num = [2, 22, 28, 11, 35];
        this.presentToast("case 13");
        console.log(this.Num);
        break;
      } case "14": {
        this.Num = [22, 11, 21, 24, 9];
        this.presentToast("case 14");
        console.log(this.Num);
        break;
      } case "15": {
        this.Num = [1, 50, 35, 11, 40];
        this.presentToast("case 15");
        console.log(this.Num);
        break;
      } case "16": {
        this.Num = [19, 20, 27, 14, 45];
        this.presentToast("case 16");
        console.log(this.Num);
        break;
      } case "17": {
        this.Num = [52, 24, 25, 38, 13];
        this.presentToast("case 17");
        console.log(this.Num);
        break;
      } case "18": {
        this.Num = [4, 16, 17, 38, 43];
        this.presentToast("case 18");
        console.log(this.Num);
        break;
      } case "19": {
        this.Num = [46, 24, 33, 2, 20];
        this.presentToast("case 19");
        console.log(this.Num);
        break;
      } case "20": {
        this.Num = [26, 39, 1, 18, 52];
        this.presentToast("case 20");
        console.log(this.Num);
        break;
      } case "21": {
        this.Num = [36, 23, 10, 38, 7];
        this.presentToast("case 21");
        console.log(this.Num);
        break;
      } case "22": {
        this.Num = [2, 29, 17, 44, 19];
        this.presentToast("case 22");
        console.log(this.Num);
        break;
      } case "23": {
        this.Num = [20, 21, 35, 49, 11];
        this.presentToast("case 23");
        console.log(this.Num);
        break;
      } case "24": {
        this.Num = [35, 23, 24, 12, 52];
        this.presentToast("case 24");
        console.log(this.Num);
        break;
      } case "25": {
        this.Num = [2, 6, 11, 12, 1];
        this.presentToast("case 25");
        console.log(this.Num);
        break;
      } case "26": {
        this.Num = [22, 17, 20, 25, 15];
        this.presentToast("case 26");
        console.log(this.Num);
        break;
      } case "27": {
        this.Num = [47, 40, 44, 49, 51];
        this.presentToast("case 27");
        console.log(this.Num);
        break;
      } case "28": {
        this.Num = [14, 40, 16, 45, 6];
        this.presentToast("case 28");
        console.log(this.Num);
        break;
      } case "29": {
        this.Num = [46, 33, 7, 10, 49];
        this.presentToast("case 29");
        console.log(this.Num);
        break;
      } case "30": {
        this.Num = [52, 26, 13, 50, 24];
        this.presentToast("case 30");
        console.log(this.Num);
        break;
      } case "31": {
        this.Num = [8, 21, 34, 47, 24];
        this.presentToast("case 31");
        console.log(this.Num);
        break;
      } case "32": {
        this.Num = [52, 26, 13, 50, 24];
        this.presentToast("case 32");
        console.log(this.Num);
        break;
      } case "33": {
        this.Num = [6, 7, 8, 9, 10];
        this.presentToast("case 33");
        console.log(this.Num);
        break;
      } case "34": {
        this.Num = [47, 48, 49, 50, 51];
        this.presentToast("case 34");
        console.log(this.Num);
        break;
      } case "35": {
        this.Num = [14, 26, 25, 24, 23];
        this.presentToast("case 34");
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
    this.http.post(GlobalVarible.host + "/api/Ticket/Create", JSON.stringify(this.ticket), GlobalVarible.httpOptions)
    .subscribe(data => {
      
      this.navCtrl.pop();
    });


    //   let alert = this.alertCtrl.create({
    //     title: 'Confirm',
    //     message: '2 Ticket = 2 Coin',
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         handler: () => {

    //         }
    //       },
    //       {
    //         text: 'Buy',
    //         handler: () => {
    //           this.checkSetNumber();
    //           this.shared.RandomNumbers = this.Num;
    //           this.navCtrl.pop();
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
  }
}
