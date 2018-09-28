import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PocketMoneyPage } from '../pocket-money/pocket-money';
import { AlarmPage } from '../alarm/alarm';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

tab1Root = HomePage;
tab2Root = PocketMoneyPage;
tab3Root = AlarmPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
