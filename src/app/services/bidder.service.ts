import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BidderService {
role:boolean;
bidderId:number;

   updatebidder: Bidder;
  constructor(private httpService: HttpClient) { }

  public setRoleBidder(role:boolean){
    this.role = role;
  }
  public loggedInAsBidder() {
    
    return this.role;
  }

  setbidderId(bidderId:number){

    this.bidderId =bidderId;
  }
  getBidderId(){

    return this.bidderId;
  }
  public addBidder(addbidder: Bidder) {
    console.log("add bidder");
    console.log(addbidder);
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/bidder/bidderCreation", addbidder, {  responseType: 'text', headers});
  }

  public getBidder(bidderId: number) {
    console.log("get farmer"); 
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Bidder>("http://localhost:8586/cropBiddingApplication/bidder/getBidder/" + bidderId)


  }

  public getAllBidders(bidders: Bidder) {
    console.log("get all bidder");
    console.log(bidders);
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Bidder>("http://localhost:8586/cropBiddingApplication/bidder/getAllBidders");

  }
  public getAllBiddersByStatus(bidders: Bidder) {
    console.log("get all bidders by status");
    console.log(bidders);
    // const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Bidder>("http://locaelhost:8586/cropBiddingApplication/bidder/getBidderByStatus");

  }
}
export class Bidder {
  bidderId: number;
  city: String;
  licenseNo: number;
  pan: String;
  isVerified: boolean;
  user: User
}
