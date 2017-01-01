import {Injectable} from '@angular/core';
import { Entry } from './entry.model';
import { Address } from './address.model';
import { Storage } from '@ionic/storage';
import { UUID } from 'angular2-uuid';
import { GoogleDistanceApi } from '../../providers/google-distance-api';

@Injectable()
export class EntriesService{

    constructor(
        public storage: Storage,
        public googleDistanceApi: GoogleDistanceApi ){}

    create(startingAddress: Address, endingAddress: Address){
        
        //Create a unique ID
        var uuid = UUID.UUID();
        
        this.googleDistanceApi.setOriginAddress(startingAddress);
        this.googleDistanceApi.setDestinationAddress(endingAddress);

        this.googleDistanceApi.getDistance();
        return uuid;
    }

    remove(uuid: string){
        this.storage.remove(uuid);
    }

    get(uuid: string){
        return this.storage.get(uuid);
    }

    getAll(entriesPerPage: number = 10){
        let entries: Entry[] = null;
        let keys = this.storage.keys();

        keys.then(value => {
            entries.push();
        });
    }
}
