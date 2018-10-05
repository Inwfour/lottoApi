import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User,GlobalVarible } from '../../app/models';
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
  test:User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.http.get<User>(GlobalVarible.host + "/api/User/Get/" + this.navParams.data.idapi)
    .subscribe(data => {
      this.test = data;
      this.test.Ticket
    });
  }

  Edit() {
    this.http.post(GlobalVarible.host + "/api/Test/Edit", JSON.stringify(this.test), GlobalVarible.httpOptions)
      .subscribe(data => {
        this.navCtrl.pop();
      });
  }


}
