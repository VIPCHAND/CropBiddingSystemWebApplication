import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid, BidService } from '../services/bid.service';
import { Bidder, BidderService } from '../services/bidder.service';
import { Crops, CropService } from '../services/crop.service';

@Component({
  selector: 'app-bidder-home-page',
  templateUrl: './bidder-home-page.component.html',
  styleUrls: ['./bidder-home-page.component.css']
})
export class BidderHomePageComponent implements OnInit {
  bidderId:number;

  constructor(private bidservice:BidService,private cropservice:CropService, private router:Router,private bidderService:BidderService) { }

  ngOnInit(): void {
    this.bidderId = this.bidderService.getBidderId();
    console.log(this.bidderId+"bidder home"); 
    this.bidderService.setbidderId(this.bidderId);
  }

}
