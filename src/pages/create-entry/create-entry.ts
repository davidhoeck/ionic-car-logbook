import { Component} from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { Entry } from '../entries/entry.model';
import { Address } from '../entries/address.model';
import { EntriesService } from '../entries/entries.service';


@Component({
  selector: 'page-create-entry',
  templateUrl: 'create-entry.html',
  providers: [ EntriesService ]
})
export class CreateEntryPage {

  public startingAddress: Address;
  public endingAddress: Address;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public entriesService: EntriesService) {
    this.startingAddress = new Address();
    this.endingAddress = new Address();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEntryPage');
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  createEntry(){
     var uuid = this.entriesService.create(this.startingAddress, this.endingAddress);

     alert(JSON.stringify(uuid));

  }

}
