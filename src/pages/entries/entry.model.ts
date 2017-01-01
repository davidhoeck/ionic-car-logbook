import { Address } from './address.model';

export class Entry{

    public startingAddress : Address;
    public endingAddress: Address;
    public distance : number;
    public date: string;
    public distanceDoubled: boolean;

    public constructor(
        startingAddress: Address,
        endingAddress: Address,
        distance: number,
        date: string,
        distanceDoubled : boolean = false )
    {
        this.startingAddress = startingAddress;
        this.endingAddress = endingAddress;
        this.distance = distance;
        this.date = date;
        this.distanceDoubled = distanceDoubled;

    }

    

}