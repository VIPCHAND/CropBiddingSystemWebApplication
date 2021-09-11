import { BoundDirectivePropertyAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid, BidService } from '../services/bid.service';
import { Bidder, BidderService } from '../services/bidder.service';
import { Crops, CropService } from '../services/crop.service';
import { Farmer } from '../services/farmer.service';


@Component({
  selector: 'app-placebid',
  templateUrl: './placebid.component.html',
  styleUrls: ['./placebid.component.css']
})
export class PlacebidComponent implements OnInit {

  crop:Crops;
  cropdata:Crops = new Crops();
  farmer:Farmer = new Farmer(); 
  bidderData:Bidder = new Bidder();
  bid:Bid;
  bidder:Bidder;
  bidderId:number;

  constructor(private cropservice:CropService,private router: Router,private bidservice:BidService,private bidderService:BidderService) { }

  ngOnInit(): any {
   this.crop = this.bidservice.udpateCropMethod();
   this.cropdata.cropId = this.crop.cropId;
   this.cropdata.cropName = this.crop.cropName;
   this.cropdata.cropType=this.crop.cropType;
   this.cropdata.basePrice = this.crop.basePrice;
   this.cropdata.fertilizer = this.crop.fertilizer;
   this.cropdata.quantity = this.crop.quantity;
  //  this.farmer.farmerId = this.crop.farmer.farmerId;
  //  this.farmer.district = this.crop.farmer.district;
  //  this.farmer.village = this.crop.farmer.village;
  //  this.farmer.isVerified = this.crop.farmer.isVerified;
  //  this.cropdata.farmer = this.farmer;
   console.log("initilaized cropdata");
   console.log(this.cropdata);
   console.log("initilaized farmer data");
   console.log(this.farmer);
    
   
    
    this.bidder = this.bidderService.updateBidderMethod();
   
    this.bidderData.bidderId = this.bidder.bidderId;
    this.bidderData.city = this.bidder.city;
    this.bidderData.licenseNo = this.bidder.licenseNo;
    this.bidderData.pan = this.bidder.pan;
    this.bidderData.isVerified = this.bidder.isVerified;
     console.log("bidder data place bid"); 
    console.log(this.bidderData);


     this.bidderId = this.bidderService.getBidderId(); 
     this.bidderService.setbidderId(this.bidderId);
    
   
  }

 
 
  onSubmit(addbid:Bid):any {
    this.bid=addbid;
    this.bid.bidder = this.bidderData;
    this.bid.crop = this.cropdata;
    //this.bid.crop.farmer = this.farmer;
    console.log("bid data");  
    console.log(this.bid);
    
   this.bidservice.addBid(this.bid).subscribe(data=>{
      alert(data);
      this.router.navigate(['./bidlist']);
    });
  
  }
}
