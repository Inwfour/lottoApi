import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-detail',
  templateUrl: 'setting-detail.html',
})

export class SettingDetailPage {
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingDetailPage');
  }

}
