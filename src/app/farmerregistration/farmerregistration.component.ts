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

farmer: Farmer = new Farmer();
user: User = new User();
  constructor(private farmerservice: FarmerService, private router: Router) { }

  ngOnInit(): void {
  }
 adduser(userform1:any){

  console.log(userform1);
    this.user.userId=userform1.userId;
    this.user.fullName = userform1.fullname;
    this.user.aadhar=userform1.Aadhar;
    this.user.address=userform1.address;
    this.user.mobile=userform1.mobile;
    this.user.password=userform1.Password;
    this.user.role="farmer";
    
    this.user.fId=userform1.farmerId;
    this.farmer.farmerId=userform1.farmerId;
    this.farmer.village=userform1.village;
    this.farmer.district=userform1.district;
    this.farmer.user=this.user;

    console.log(this.farmer);

    this.farmerservice.addFarmer(this.farmer).subscribe(data =>{
      alert(data);
      this.router.navigate(['/login'])
    })
 }
 }

