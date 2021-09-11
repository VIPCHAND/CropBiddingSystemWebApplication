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
  bid:Bid;
  bidder:Bidder;
  crops : Crops[];

  constructor(private bidservice:BidService,private router:Router,private cropservice:CropService) { 
   
  }

  
  ngOnInit(): any {
    
    this.bidservice.getBidderById(1).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
     console.log("initialized bidder data");

     this.cropservice.fetchApprovedCrop().subscribe(
      response=> this.handleSuccessfulResponse2(response),
    );
    console.log("initilized Crop Data");
  }

  handleSuccessfulResponse(response:any){
    this.bidder = response;
    console.log(response);
  }

  

  handleSuccessfulResponse2(response:any){
    this.bidder = response;
    console.log(response);
  }

  onUpdate(crops:any){
    this.crops = crops;    
    console.log(this.crops);
    this.bidservice.updateCrop(this.crops);
      this.router.navigate(['./placebid']);
    }

}
