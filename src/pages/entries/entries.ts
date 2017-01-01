import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CreateEntryPage } from '../create-entry/create-entry'

/*
  Generated class for the Entries page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entries',
  templateUrl: 'entries.html'
})
export class EntriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntriesPage');
  }

  openCreateModal(){
    let createModal = this.modalCtrl.create(CreateEntryPage);
    createModal.present();
  }

}
