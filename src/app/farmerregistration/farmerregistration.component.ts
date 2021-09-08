import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Farmer,FarmerService } from '../farmer.service';
import { User } from '../user.service';

@Component({
  selector: 'app-farmerregistration',
  templateUrl: './farmerregistration.component.html',
  styleUrls: ['./farmerregistration.component.css']
})
export class FarmerregistrationComponent implements OnInit {

farmer: Farmer;
user: User;
  constructor(private farmerservice: FarmerService, private router: Router) { }

  ngOnInit(): void {
  }
  adduser(adduser:User,addfarmer:Farmer){
    this.user=adduser;
    console.log(this.user);
    this.farmer=addfarmer;
    this.farmer.user=this.user;
    console.log(this.farmer);
if(this.farmer==null){

}else{
  this.farmerservice.addFarmer(this.farmer).subscribe( data => {
    alert(data);
    this.router.navigate(['/login']);
  });
}
  } 
}
