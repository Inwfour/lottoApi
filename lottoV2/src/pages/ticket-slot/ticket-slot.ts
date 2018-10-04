import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Test,GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
/**
 * Generated class for the TicketSlotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-slot',
  templateUrl: 'ticket-slot.html',
})
export class TicketSlotPage {
test:Test;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public alertCtrl:AlertController) {
  }


  ionViewDidLoad() {
        this.http.get<Test>(GlobalVarible.host + "/api/Test/List")
    .subscribe((data) => {
      this.test = data;
    });
  }

  Delete(id: string) {
    const confirm = this.alertCtrl.create({
      title: "Delete '" + id + "' ?",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.http.post(GlobalVarible.host + "/api/Test/Delete/" + id, {}, GlobalVarible.httpOptions)
              .subscribe(data => {
                this.ionViewDidLoad();
              });
          }
        }
      ]
    });
    confirm.present();
  }

}
