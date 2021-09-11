import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid, BidService } from '../services/bid.service';
import { Bidder } from '../services/bidder.service';
import { Crops, CropService } from '../services/crop.service';

@Component({
  selector: 'app-updatebid',
  templateUrl: './updatebid.component.html',
  styleUrls: ['./updatebid.component.css']
})
export class UpdatebidComponent implements OnInit {
  bids:Bid[];
  bid:Bid= new Bid();
  bidder:Bidder;
  crops : Crops[];
  bidderId:number;

  constructor(private bidservice:BidService,private router:Router,private cropservice:CropService) { 
   this.bid = this.bidservice.updateBidMethod();
    console.log("bid dataa");
    console.log(this.bid);
  }

  
  ngOnInit(): any {
    
   
  }

 

  onUpdate(bid:Bid):any{
    this.bid = bid;    
    console.log(this.crops);
    this.bidservice.updateCrop(this.bid);
      this.router.navigate(['./placebid']);
    }
}
