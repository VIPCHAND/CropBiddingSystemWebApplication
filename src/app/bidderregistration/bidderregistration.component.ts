import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Bidder, BidderService } from '../bidder.service';
import { User } from '../user.service';

@Component({
  selector: 'app-bidderregistration',
  templateUrl: './bidderregistration.component.html',
  styleUrls: ['./bidderregistration.component.css']
})
export class BidderregistrationComponent implements OnInit {

 bidder: Bidder;
user: User;
  constructor(private bidderservice: BidderService, private router: Router) { }

  ngOnInit(): void {
  }
  adduser(adduser:any){
    this.user.userId=adduser.value.userid;
    this.user.fullName=adduser.value.fullname;
    this.user.aadhar=adduser.value.aadhar;
    this.user.address=adduser.value.address;
    this.user.mobile=adduser.value.mobile;
    this.user.password=adduser.value.password;
    this.user.role="bidder";
    console.log(this.user);
    this.bidder.city=adduser.value.city;
    this.bidder.licenseNo=adduser.value.licenseNo;
    this.bidder.pan=adduser.value.pan;
    this.bidder.user=this.user;
    
    console.log(this.bidder);
     
      this.bidderservice.addBidder(this.bidder).subscribe(data => {
        alert(data);
        this.router.navigate(['/login']);
      });
    }
}
