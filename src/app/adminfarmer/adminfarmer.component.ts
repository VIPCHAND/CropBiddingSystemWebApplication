import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Crops, CropService } from '../services/crop.service';
import { Farmer, FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-adminfarmer',
  templateUrl: './adminfarmer.component.html',
  styleUrls: ['./adminfarmer.component.css']
})
export class AdminfarmerComponent implements OnInit {

   farmer:any;
  //crops:Crops[];

  constructor(private service:CropService,private router: Router,private farmerservice:FarmerService,private adminservice:AdminService) { }

  ngOnInit(): any {
    this.farmerservice.getFarmerByStatusFalse().subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   

  }

  handleSuccessfulResponse(response:any){
    this.farmer = response;
    console.log(response);
    
  }

    approveFarmer(approvefarmer:Farmer) {
      this.adminservice.approveFarmer(approvefarmer).subscribe(data => {alert(data);  this.router.navigate(['/admin']);});
  
  }


}
