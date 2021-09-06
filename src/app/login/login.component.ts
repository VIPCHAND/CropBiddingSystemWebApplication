import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    data={
    userId:"",
    password:""

  }

  constructor(private login:UserService,private router:Router) {
    
  }

  
  ngOnInit(): void {
  }
  doSubmitForm()
  {
    console.log("try to sumbit Form");
    console.log("data",this.data);
    // console.log(logindetails.value); 
    if(this.data.userId=='' || this.data.password=='')
    this.login.login(this.data).subscribe(
      Response=>{
        localStorage.setItem("userId", this.data.userId);

        this.router.navigate(['homepage'])
        

      },
      error=>{
        console.log(error);
      }

    )
    }
}
