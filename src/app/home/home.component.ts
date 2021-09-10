import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidderService } from '../bidder.service';
import { FarmerService } from '../farmer.service';
import { User } from '../user.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User = new User();
  userId:string;
  constructor(private userservice:UserService,private router:Router,public farmerservice:FarmerService,public bidderservice:BidderService) { 

  }

  ngOnInit(): void {
     let user= sessionStorage.getItem("userId");
   this.userservice.getUserDetails(this.userId).subscribe(response => this.handleSuccessfulResponse(response),);
  }
   handleSuccessfulResponse(response:any){
    this.user = response;
    console.log(this.user);
    
    if(this.user.role == "farmer"){
      console.log(this.user.role);
      console.log(this.user.fId);
      this.farmerservice.setfarmerId(this.user.fId);
      this.farmerservice.setRoleFarmer(true);
      this.bidderservice.setRoleBidder(false);
      this.router.navigate(['/fhome']);

    }
    if(this.user.role == "bidder"){
      console.log(this.user.role);
      console.log(this.user.bId);
      this.farmerservice.setRoleFarmer(false);
      this.bidderservice.setRoleBidder(true);
      this.router.navigate(['/bhome']);

    }
    if(!(this.user.role=="bidder") && !(this.user.role=="farmer")){
       this.farmerservice.setRoleFarmer(false);
      this.bidderservice.setRoleBidder(false);
      this.router.navigate(['/home']);
    }

          
   }

}
