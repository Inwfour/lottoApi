import { Component, ViewChild } from '@angular/core';
import {Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
  import { TabsPage } from '../pages/tabs/tabs';
  import { PocketMoneyPage } from '../pages/pocket-money/pocket-money';
import { SettingPage } from '../pages/setting/setting';
import { TicketPage } from '../pages/ticket/ticket';
import { TicketScrathPage } from '../pages/ticket-scrath/ticket-scrath';
import { TicketSlotPage } from '../pages/ticket-slot/ticket-slot';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TicketScrathPage;

  constructor(public platform: Platform, public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.initializeApp();
  }
  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  nextS(){
    this.nav.setRoot(SettingPage);
  }
  nextL(){
    this.nav.setRoot(LoginPage);
  }
 
}

