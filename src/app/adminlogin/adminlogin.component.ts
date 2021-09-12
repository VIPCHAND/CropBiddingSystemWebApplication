import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { BidderService } from '../services/bidder.service';
import { FarmerService } from '../services/farmer.service';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  user:User=new User();
  constructor(private loginservice:UserService,private adminService:AdminService,private router: Router,private userservice:UserService,public farmerservice:FarmerService,public bidderservice:BidderService) { }

  ngOnInit(): void {
  }
  public login (loginForm:any) {
  this.user.userId=loginForm.userId;
  this.user.password=loginForm.password;
  console.log(this.user);
    if(this.user.userId.match("12345") && this.user.password.match("12345")){
      this.user.aId = 12345;
      this.user.fId = 0;
      this.user.bId = 0;
      this.user.role = "admin";

      this.loginservice.setUserData(this.user);
      this.loginservice.setloggin(true);
      this.loginservice.setUserId(this.user.userId);
       this.adminService.setAdminId(this.user.aId);
      this.farmerservice.setStatusFarmer(false);
      this.bidderservice.setStatusBidder(false);
      this.adminService.setStatusAdmin(true);
      console.log(this.user);
          
           alert("Login successful !!");
           
    this.router.navigate(['/ahome']);
    }else{

      alert("Invalid Credential");
    }     
        
          
        }
      }