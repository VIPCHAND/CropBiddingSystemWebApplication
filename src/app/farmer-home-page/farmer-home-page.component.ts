import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from '../services/bid.service';
import { BidderService } from '../services/bidder.service';
import { CropService } from '../services/crop.service';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-farmer-home-page',
  templateUrl: './farmer-home-page.component.html',
  styleUrls: ['./farmer-home-page.component.css']
})
export class FarmerHomePageComponent implements OnInit {

  farmerId:number;
  constructor(private farmerService:FarmerService,private bidService:BidService,private cropservice:CropService, private router:Router,private bidderService:BidderService) { }

  ngOnInit(): void {
    this.farmerId = this.farmerService.getfarmerId();
    console.log("farmer home"); 
    console.log(this.farmerId);
    this.bidderService.setbidderId(this.farmerId);
  }

}
