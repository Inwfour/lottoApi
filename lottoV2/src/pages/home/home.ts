import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ScrathGamePage } from '../scrath-game/scrath-game';
import { TicketPage } from '../ticket/ticket';
import { FruityGamePage } from '../fruity-game/fruity-game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController) {

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
