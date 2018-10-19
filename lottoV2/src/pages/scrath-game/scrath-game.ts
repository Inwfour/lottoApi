import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketPage } from '../ticket/ticket';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Ticket } from '../../models/ticket';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from '../../models/user';
import { SettingDetailPage } from '../setting-detail/setting-detail';
import { ScratchGamePlayPage } from '../scratch-game-play/scratch-game-play';

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
  ticket:Ticket[];
  user:User;
  sl="sl";
  count:number;
  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams,private shared:SharedDataProvider) {
    this.user = shared.User;

  }

  // ionViewWillLoad() {
  //   this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl")
  //   .subscribe((data) => {
  //     this.ticket = data;

  //   });
  // }
  

  ionViewWillEnter() {
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl")
    .subscribe((data) => {
      this.ticket = data;
      this.count = data.length;
      
    });

}

  nextTicket(sl:string){
    this.navCtrl.push(TicketPage,{sl:this.sl});
  }

  NextGame(id:string){
    this.http.get<Ticket>(GlobalVarible.host + "/api/Ticket/Get/" + id)
    .subscribe((data) => {
      this.shared.Ticket = data;  
      console.log(this.shared.Ticket);
      this.navCtrl.push(ScratchGamePlayPage);    
    });
  }

}
