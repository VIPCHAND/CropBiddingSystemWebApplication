import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Bidder, BidderService } from '../bidder.service';
import { Farmer } from '../crop.service';
import { User } from '../user.service';

@Component({
  selector: 'app-bidderregistration',
  templateUrl: './bidderregistration.component.html',
  styleUrls: ['./bidderregistration.component.css']
})
export class BidderregistrationComponent implements OnInit {

 bidder: Bidder = new Bidder();
 farmer:Farmer=new Farmer();
 user:User = new User();
 userId:string;
  constructor(private bidderservice: BidderService, private router: Router) { }

  ngOnInit(): void {
  }
  adduser(userform1:any){
    console.log(userform1);
    console.log(userform1.userId);
    console.log(userform1.fullname);
    // this.user.userId= "value";
    // console.log(this.user.userId);
    this.userId = userform1.userId;
    console.log(this.userId);
    
     this.user.userId=this.userId;
    this.user.fullName = userform1.fullname;
    this.user.aadhar=userform1.Aadhar;
    this.user.address=userform1.address;
    this.user.mobile=userform1.mobile;
    this.user.password=userform1.Password;
    this.user.role="bidder";
    console.log(this.user);
    this.user.bId=userform1.bidderId;
    this.bidder.bidderId=userform1.bidderId;
    this.bidder.city=userform1.city;
    this.bidder.licenseNo=userform1.LicenseNo;
    this.bidder.pan=userform1.PanNo;
    this.bidder.user=this.user;
    // this.farmer 
    
    console.log(this.bidder);
     
      this.bidderservice.addBidder(this.bidder).subscribe(data => {
        alert(data);
        this.router.navigate(['/login']);
      });
    }
}
