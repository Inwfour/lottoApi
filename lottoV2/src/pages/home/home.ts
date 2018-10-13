import { Component } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ScrathGamePage } from '../scrath-game/scrath-game';
import { TicketPage } from '../ticket/ticket';
import { FruityGamePage } from '../fruity-game/fruity-game';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:User;
  constructor(public http:HttpClient, public navParams: NavParams,  public navCtrl: NavController,public menuCtrl: MenuController,private shared:SharedDataProvider) {
    this.user = shared.User;
  }
  back(){
    this.navCtrl.push(LoginPage);
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  nextGame(){
    this.navCtrl.push(ScrathGamePage);
  }
  nextTicket(){
    this.navCtrl.push(TicketPage);
  }

  nextFruity(){
    this.navCtrl.push(FruityGamePage);
  }

}
