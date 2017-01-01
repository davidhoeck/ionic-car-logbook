import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Address } from '../pages/entries/address.model';

@Injectable()
export class GoogleDistanceApi {

  public originAddress: Address;
  public destinationAddress: Address;
  private API_BASE_URL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
  private API_KEY = "AIzaSyBMVye5r9Obk_X0pBQNOVjxe2gYKGv50JU";

  constructor(public http: Http) {
    console.log('Hello GoogleDistanceApi Provider');
  }

  setOriginAddress(origin: Address){
    this.originAddress = origin;
  }

  setDestinationAddress(destination: Address){
    this.destinationAddress = destination;
  }

  getDistance(){
    let result = this.getResult();

    result.subscribe(
      (response) => this.logResult(response.json()),
      (error) => this.handleError(error.json())
    )

  }

  /**
   * Creates a request to the API with the given addresses
   */
  getResult(){
    var url = this.getRequestUrl();
    
    console.log(url);


    return this.http.get(url);

  }

  logResult(res: any){
    console.log(res);
  }

  handleError(error: any){
    console.error(error);
  }

  getRequestUrl(){
    return encodeURI(this.API_BASE_URL + "key=" + this.API_KEY + "&origins=" + this.originAddress.__toString() + "&destination=" + this.destinationAddress.__toString());
  }

}
