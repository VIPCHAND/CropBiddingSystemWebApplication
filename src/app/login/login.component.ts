import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';
import { BidderService } from '../bidder.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
invalidlogin=false;
  user:User=new User();
  userrole:string;
  users:User;
ngOnInit(): void {
  }
  constructor(private loginservice:UserService,private router:Router,public farmerservice:FarmerService,public bidderservice:BidderService) {
    return;
  }

  @Input() error: String="";
  
  public login (loginForm:any) {
  this.user.userId=loginForm.userId;
  this.user.password=loginForm.password;
  console.log(this.user);
    (this.loginservice.login(this.user).subscribe(
        
        data => {
          alert(data);
          this.loginservice.setloggin(true);
          this.handleSuccessfulResponse(data);
          
          
          this.router.navigate(['/home'])
          
        }
        ,
        error => {
          this.invalidlogin = true
          this.error = error.message;
          alert("Invalid Credential")
  
        }
      )
      );
  }
  
  handleSuccessfulResponse(response:any){
    this.users = response;
    if(this.user.role="farmer"){
      this.farmerservice.setRoleFarmer(true);
      this.bidderservice.setRoleBidder(false);

    }else{
         this.farmerservice.setRoleFarmer(false);
      this.bidderservice.setRoleBidder(true);

    }
    
  }
}
