import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { FarmerService } from '../services/farmer.service';
import { BidderService } from '../services/bidder.service';


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
  userdata:User = new User();
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
        response => {
          this.loginservice.setUserData(response);
          this.loginservice.setloggin(true);
          this.loginservice.setUserId(this.user.userId);
          this.handresp(response);
           alert("Login successfull");
           
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

  handresp(user:any){
     this.userdata = user;
     console.log(this.user);

   }
 
 
}
