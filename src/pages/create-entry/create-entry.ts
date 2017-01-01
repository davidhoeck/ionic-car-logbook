import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

/*
  Generated class for the CreateEntry page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-entry',
  templateUrl: 'create-entry.html'
})
export class CreateEntryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEntryPage');
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
