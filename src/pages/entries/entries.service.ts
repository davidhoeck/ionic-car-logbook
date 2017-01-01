import {Injectable} from '@angular/core';
import { Entry } from './entry.model';
import { Address } from './address.model';
import { Storage } from '@ionic/storage';
import { UUID } from 'angular2-uuid';

@Injectable()
export class EntriesService{

    constructor(public storage: Storage){}

    create(entry: Entry){
        
        //Create a unique ID
        var uuid = UUID.UUID();
        
        //Store the entry
        this.storage.set(uuid, entry);

        //Return all unique ids in the storage
        return this.storage.keys();
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
