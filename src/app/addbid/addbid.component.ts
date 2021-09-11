import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid, BidService } from '../services/bid.service';
import { Bidder, BidderService } from '../services/bidder.service';
import { Crops, CropService } from '../services/crop.service';


@Component({
  selector: 'app-addbid',
  templateUrl: './addbid.component.html',
  styleUrls: ['./addbid.component.css']
})
export class AddbidComponent implements OnInit {
   bid:Bid; 
   bidder:Bidder; 
  crops : Crops[];
  bidderId:number;

  constructor(private bidservice:BidService,private cropservice:CropService, private router:Router,private bidderService:BidderService) { }

  ngOnInit(): any {
    this.bidderId = this.bidderService.getBidderId(); 
    this.bidderService.setbidderId(this.bidderId);
    console.log(this.bidderId);
    this.bidservice.getBidderById(this.bidderId).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
     console.log("initialized bidder data");

     this.cropservice.fetchApprovedCrop().subscribe(response=> 
      this.handleSuccessfulResponse2(response)
    );
    console.log("initilized Crop Data");
  }

  handleSuccessfulResponse(response:any){
    this.bidder = response;
    console.log(this.bidder);
  }

  

  handleSuccessfulResponse2(response:any){
    this.crops = response;
    console.log("add bid");
    console.log(this.crops);
  }

  addbid(crops:any){
    this.crops = crops; 
    console.log("crop data add bid");   
    console.log(this.crops);
    this.bidservice.updateCrop(this.crops);
    
    this.bidderService.updateBidder(this.bidder);
    
    console.log("bidder data add bid"); 
    console.log(this.bidder)
      this.router.navigate(['./placebid']);
      
    }

}
