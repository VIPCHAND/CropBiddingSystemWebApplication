import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BidService {

    bid:Bid;
  updatebid:Bid;
  constructor(private httpService: HttpClient) { }

  public addBid(addbid:Bid){
    console.log("Bid Added");
    console.log(addbid);
    const headers =new HttpHeaders().set('Content_Type','text/plain ; charset=utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/bid/addBid", addbid,  {responseType: 'text',headers});
    
  }

  public update(updatebid:Bid){
    this.updatebid = this.updatebid;
  }
  public udpateMethod(){
    return this.updatebid;
  }

  public onUpdate(UpdateBid: Bid) {
    console.log("Bid updated");
    
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8586/cropBiddingApplication/bid/updateBid", UpdateBid,  {responseType: 'text',headers});
  }

  public getBidsByBidderId(bidderId:number){
    console.log("Getting Bids by Bidder-Id.");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8586/cropBiddingApplication/bid/getBidsByBidder/" +bidderId, {responseType: 'text',headers});
  }

  public getBidsByCropId(cropId:number){
    console.log();
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8586/cropBiddingApplication/bid/getBidsByBidder/" +cropId, {responseType: 'text',headers});

  }

  public getBidderById(bidderId:number){
    console.log("Get Bidder.");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Bidder>("http://localhost:8586/cropBiddingApplication/bidder/getBidder/"+ bidderId)

  }
  public getCrop(cropId:number){
    console.log("Get Crops.");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Crops>("http://localhost:8586/cropBiddingApplication/bidder/getBidder/"+ cropId)

  }
}

export class Bid{
  bidId:number;
  date:any;
  amount:number;
  isWinningBid:boolean;
  bidder: Bidder; // added property
  
}
export class Farmer{
  farmerId:number;
  village:string;
  district:string;
 }

export class Bidder{
  bidderId:number;
  city:string;
  licenseNo:string;
  pan:string;
  crop: Crops; // added property

}
export class Crops{
  cropId:number;
  cropName:string;
  cropType:string;
  fertilizer:string;
  quanity:number;
  basePrice:number;


}