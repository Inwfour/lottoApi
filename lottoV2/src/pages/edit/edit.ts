import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Test,GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  test:Test;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.http.get<Test>(GlobalVarible.host + "/api/Test/Get/" + this.navParams.data.idapi)
    .subscribe(data => {
      this.test = data;
    });
  }

  Edit() {
    this.http.post(GlobalVarible.host + "/api/Test/Edit", JSON.stringify(this.test), GlobalVarible.httpOptions)
      .subscribe(data => {
        this.navCtrl.pop();
      });
  }


}
