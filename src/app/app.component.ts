import { Component } from '@angular/core';
import { AdminService } from './services/admin.service';
import { BidderService } from './services/bidder.service';
import { FarmerService } from './services/farmer.service';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CropBiddingSystem';
  constructor(public loginService:UserService,public farmerservice:FarmerService,public bidderservice:BidderService,public adminService:AdminService){}
}
