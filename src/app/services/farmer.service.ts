import { Injectable } from '@angular/core';
import {CropService} from './crop.service';
/**import { Http2ServerRequest } from 'http2';*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
farmer:Farmer;
status:boolean;
farmerId:number;
constructor(private httpService: HttpClient) { }

  public setStatusFarmer(status:boolean){
    this.status = status;
  }
  public loggedInAsFarmer() {
    
    return this.status;
  }

 public setfarmerId(farmerid:number){
   this.farmerId=farmerid;

 }
 public getfarmerId(){
   return this.farmerId;
 }
 public addFarmer(newFarmer: Farmer) {
  console.log("Farmer added");
  console.log(newFarmer);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post("http://localhost:8586/cropBiddingApplication/farmer/farmerCreation", newFarmer,  { headers, responseType: 'text'});
}

public update(updateFarmer: Farmer) {
  this.farmer = updateFarmer;
}
public updateMethod() {
  return this.farmer;
}
public onUpdate(update: Farmer) {
  console.log("update successful");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put("http://localhost:8586/cropBiddingApplication/farmer/editFarmer/", update,  {responseType: 'text',headers});
}

public getFarmer(farmerId: number) {
  console.log("get farmer"); 
  const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Farmer>("http://localhost:8586/cropBiddingApplication/farmer/getFarmer/" + farmerId)
}

public getAllFarmer() {
  console.log("get all farmer");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Farmer>("http://localhost:8586/cropBiddingApplication/farmer/getAllFarmer");
}

public getFarmerByStatus() {
  console.log("get farmer by status");
   const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Farmer>("http://localhost:8586/cropBiddingApplication/farmer/getFarmerByStatus");
}


public getFarmerByStatusFalse() {
  console.log("get farmer by status");
   const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Farmer>("http://localhost:8586/cropBiddingApplication/farmer/getFarmerByStatusFalse");

}

}

export class Farmer{
  farmerId: number;
  village: string;
  district: string;
  isVerified: boolean;
  user:User
}
