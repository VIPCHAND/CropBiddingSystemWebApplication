import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CropService {

  updateCrop : Crops;
  constructor(private httpService: HttpClient) { }

  public loggedIn(){
    return true;
  }

  public getAllCrops(){
    console.log("ins service get crops");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Crops>("http://localhost:8586/cropBiddingApplication/crop/fetchAllCrops");
  }
}

export class Crops{
  cropId: number;
  cropName:string;
  cropType: string;
  fertilizer: string;
  quantity: number;
  basePrice: number;
  isApproved: number;
  farmer:Farmer;


}

export class Farmer{
  farmerId:number;
  village:string;
  district:string;
  isVerified:number;
}
