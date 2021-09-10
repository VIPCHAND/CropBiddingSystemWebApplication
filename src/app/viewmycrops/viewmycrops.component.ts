import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService,Crops,Farmer } from '../crop.service';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-viewmycrops',
  templateUrl: './viewmycrops.component.html',
  styleUrls: ['./viewmycrops.component.css']
})
export class ViewmycropsComponent implements OnInit {

   farmer:any;
  crops:Crops[];

  constructor(private cropservice:CropService,private router: Router,private farmerservice:FarmerService) { 
    this.farmer=this.farmerservice.updateMethod();
  }

  ngOnInit(): any {
    this.cropservice.getCropByFarmerId(this.farmer.farmerId).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   

  }

  handleSuccessfulResponse(response:any){
    this.crops = response;
    console.log(response);

    

}
update(editCrop: Crops) {
  this.cropservice.update(editCrop);
  this.router.navigate(['/editcrop']); //updating the employee
}
}
