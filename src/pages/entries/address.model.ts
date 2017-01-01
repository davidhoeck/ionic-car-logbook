export class Address{

    public street: string;
    public houseNumber: string;
    public zipCode: number;
    public city: string;
    public country: string;

    constructor(street, houseNumber, zipCode, city, country){
        this.street = street;
        this.houseNumber = houseNumber;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
    }

    public __toString() : string{
        var addressString = this.street;
        addressString += ' ' + this.houseNumber;
        addressString += ', ' + this.zipCode;
        addressString += ' ' + this.city;
        addressString += ', ' + this.country;

        return addressString;
    }

}