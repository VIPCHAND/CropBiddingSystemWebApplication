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
  users:User=new User();
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
          this.loginservice.setUserData(data);
          this.loginservice.setloggin(true);
          this.loginservice.setUserId(this.user.userId);
          
         

          
           alert(data);
           
    this.router.navigate(['/home']);
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

 
}
