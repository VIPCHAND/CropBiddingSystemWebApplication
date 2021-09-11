import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from '../services/bid.service';
import { Crops, CropService } from '../services/crop.service';
import { FarmerService } from '../services/farmer.service';


@Component({
  selector: 'app-viewmycrops',
  templateUrl: './viewmycrops.component.html',
  styleUrls: ['./viewmycrops.component.css']
})
export class ViewmycropsComponent implements OnInit {

     farmer:any;
  crops:Crops[];

  constructor(private cropservice:CropService,private router: Router,private farmerservice:FarmerService,private bidservice:BidService) { 
    this.farmer=this.farmerservice.updateMethod();
  }

  ngOnInit(): any {
    this.cropservice.getCropByFarmerId(1).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   

  }

  handleSuccessfulResponse(response:any){
    this.crops = response;
    console.log(response);

    

}
update(viewbids: Crops) {
  this.cropservice.update(viewbids);
  this.router.navigate(['/viewbids']); //updating the employee
}
}
