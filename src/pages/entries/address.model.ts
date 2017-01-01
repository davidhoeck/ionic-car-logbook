export class Address{

    public street: string;
    public houseNumber: string;
    public zipCode: number;
    public city: string;
    public country: string;

    constructor(){}

    public __toString() : string{
        var addressString = this.street;
        addressString += ' ' + this.houseNumber;
        addressString += ', ' + this.zipCode;
        addressString += ' ' + this.city;
        addressString += ', ' + this.country;

        return addressString;
    }

}