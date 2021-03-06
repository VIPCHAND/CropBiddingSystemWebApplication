import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bidder } from './bidder.service';
import { Crops } from './crop.service';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  bid:Bid;
  updatebid:Bid;
  bidder:Bidder;
  crop:Crops;
  constructor(private httpService: HttpClient) { }

  public addBid(addbid:Bid){
    console.log("Bid Added");
    console.log(addbid);
    const headers =new HttpHeaders().set('Content_Type','text/plain ; charset=utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/bid/addBid", addbid,  {responseType: 'text',headers});
    
  }
  public updateBid(bid:any){
    this.bid=bid;
  }

  public updateBidMethod(){
    return this.bid;
  }
  public updateCrop(crop:any){
    this.crop =crop;
  }
  public udpateCropMethod(){
    return this.crop;
  }

  public onUpdate(UpdateBid: Bid) {
    console.log("Bid updated");    
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8586/cropBiddingApplication/bid/updateBid/", UpdateBid,  {responseType: 'text',headers});
  }

  public getBidsByBidderId(bidderId:number){
    console.log("Getting Bids by Bidder-Id.");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8586/cropBiddingApplication/bid/getBidsByBidder/" +bidderId, {responseType: 'json',headers});
  }

  public getBidsByCropId(cropId:number){
    console.log("Crop  By cropID");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8586/cropBiddingApplication/bid/getBidsByCrop/" +cropId, {responseType: 'json',headers});

  }

  public getBidderById(bidderId:number){
    console.log("Get Bidder.");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Bidder>("http://localhost:8586/cropBiddingApplication/bidder/getBidder/"+ bidderId)

  }
  public getCrop(cropId:number){
    console.log("Get Crops.");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Crops>("http://localhost:8586/cropBiddingApplication/crop/"+ cropId)

  }
}

export class Bid{
  bidId:number;
  bidDate:any;
  amount:number;
  isWinningBid:boolean;
  bidder: Bidder; // added property
  crop:Crops;
  
}
