import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crops} from './crop.service';
import { Bidder } from './bidder.service';
import {Bid} from './bid.service';
import { Farmer } from './farmer.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  approvefarmer : Farmer ;
  approvecrop : Crops;
  approvebidder:Bidder;
  bid:Bid;
  role:boolean;
  adminId:number;
  constructor(private httpService: HttpClient) { }

  
  public setStatusAdmin(role:boolean){
    this.role = role;
  }
  public loggedInAsAdmin() {
    
    return this.role;
  }

  setAdminId(adminId:number){

    this.adminId =adminId;
  }
  getAdminId(){

    return this.adminId;
  }

  public approveCrop(approvecrop:Crops){
    console.log("approve crop");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/admin//qualityCheckApprove",approvecrop,{ responseType: 'text',headers});
  }
  public approveFarmer(approvefarmer:Farmer){
    console.log("approve farmer");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/admin/farmerApprove",approvefarmer,{ responseType: 'text',headers});
  }
  public approveBidder(approvebidder:Bidder){
    console.log("approve bidder");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/admin/getBidderApprove",approvebidder,{ responseType: 'text',headers});
  }
  public setwinningbid(bid:Bid){
    console.log("bid won");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.post(" http://localhost:8586/cropBiddingApplication/admin/winningBid",bid,{ responseType: 'text',headers});
  }
}
