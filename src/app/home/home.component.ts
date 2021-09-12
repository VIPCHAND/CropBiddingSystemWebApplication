import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminHomePageComponent } from '../admin-home-page/admin-home-page.component';
import { AdminService } from '../services/admin.service';
import { BidderService } from '../services/bidder.service';
import { FarmerService } from '../services/farmer.service';

import { User } from '../services/user.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User = new User();
  userdata:User = new User();
  userId:string;
  constructor(private userservice:UserService,private router:Router,public farmerservice:FarmerService,public bidderservice:BidderService,private adminService:AdminService) { 

  }

  ngOnInit(): void {
    this.userdata =  this.userservice.fetchUser();
    this.handleSuccessfulResponse(this.userdata);
  }
   handleSuccessfulResponse(response:any){
    this.user = response;
    console.log("check on home");
    console.log(this.user);
   
    if(this.user.fId !== 0){
      console.log(this.user.role);
      console.log(this.user.fId);
      this.farmerservice.setfarmerId(this.user.fId);
      this.farmerservice.setStatusFarmer(true);
      this.bidderservice.setStatusBidder(false);
      this.adminService.setStatusAdmin(false);
      this.router.navigate(['/fhome']);

    }
    if(this.user.bId !== 0){
       console.log(this.user.role + "home");
      console.log(this.user.bId  + "home");
      this.bidderservice.setbidderId(this.user.bId);
      this.farmerservice.setStatusFarmer(false);
      this.bidderservice.setStatusBidder(true);
       this.adminService.setStatusAdmin(false);
      //send all the above data to bidder home and do the same for farmer
      this.router.navigate(['/bhome']);
    }
    
    if(!this.userservice.isUserLoggedIn()){
      this.farmerservice.setStatusFarmer(false);
      this.bidderservice.setStatusBidder(false);
      this.adminService.setStatusAdmin(false);
      
      this.router.navigate(['/home']);
    }

          
   }

}
