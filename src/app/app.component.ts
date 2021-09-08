import { Component } from '@angular/core';
import { BidderService } from './bidder.service';
import { FarmerService } from './farmer.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CropBiddingSystem';
  constructor(public loginService:UserService,public farmerservice:FarmerService,public bidderservice:BidderService){}
}
