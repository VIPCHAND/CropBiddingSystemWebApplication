import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private userservice:UserService,private router:Router,public farmerservice:FarmerService,public bidderservice:BidderService) { 

  }

  ngOnInit(): void {
    this.userdata =  this.userservice.fetchUser();
    this.handleSuccessfulResponse(this.userdata);
  }
   handleSuccessfulResponse(response:any){
    this.user = response;
    console.log(this.user+ "check on home");
   
    if(this.user.fId !== 0){
      console.log(this.user.role + "home");
      console.log(this.user.fId  + "home");
      this.farmerservice.setfarmerId(this.user.fId);
      this.farmerservice.setRoleFarmer(true);
      this.bidderservice.setRoleBidder(false);
      // this.adminservice.setRoleAdmin(false);
      this.router.navigate(['/fhome']);

    }
    if(this.user.bId !== 0){
       console.log(this.user.role + "home");
      console.log(this.user.bId  + "home");
      this.bidderservice.setbidderId(this.user.bId);
      this.farmerservice.setRoleFarmer(false);
      this.bidderservice.setRoleBidder(true);
      //  this.adminservice.setRoleAdmin(false);
      //send all the above data to bidder home and do the same for farmer
      this.router.navigate(['/bhome']);
    }
    if(this.user.aId !== 0){
       console.log(this.user.role + "home");
      console.log(this.user.bId  + "home");
      this.bidderservice.setbidderId(this.user.bId);
      this.farmerservice.setRoleFarmer(false);
      this.bidderservice.setRoleBidder(false);
      this.router.navigate(['/ahome']);

    }
    if(this.user.bId === 0 && this.user.fId === 0 && this.user.aId === 0){
       this.farmerservice.setRoleFarmer(false);
      this.bidderservice.setRoleBidder(false);
      //  this.adminservice.setRoleAdmin(false);
      
      this.router.navigate(['/home']);
    }

          
   }

}
