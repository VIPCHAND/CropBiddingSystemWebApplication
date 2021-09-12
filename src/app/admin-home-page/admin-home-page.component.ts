import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { BidderService } from '../services/bidder.service';
import { FarmerService } from '../services/farmer.service';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  adminId:number;
   user:User = new User();
  userdata:User = new User();
  userId:string;
  constructor(private adminService:AdminService,private userservice:UserService,private router:Router,public farmerservice:FarmerService,public bidderservice:BidderService) { }

  ngOnInit(): void {
    this.userdata =  this.userservice.fetchUser();
    this.handleSuccessfulResponse(this.userdata);
    this.adminId = this.adminService.getAdminId();
    console.log(this.adminId); 
    this.adminService.setAdminId(this.adminId);
    
   
      

    }
    handleSuccessfulResponse(reponse:any){

      this.user  = reponse;
       console.log("admin home");
       console.log(this.user.role);
      console.log(this.user.aId);
      this.adminService.setAdminId(this.user.aId);
      this.farmerservice.setStatusFarmer(false);
      this.bidderservice.setStatusBidder(false);
      this.adminService.setStatusAdmin(true);

    }
  }


