import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crops, CropService } from '../services/crop.service';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent implements OnInit {

  crops:Crops[];
  farmerId:number;

  constructor(private service:CropService,private router: Router,private farmerService:FarmerService) { }

  ngOnInit(): any {
    this.farmerId = this.farmerService.getfarmerId();
    this.farmerService.setfarmerId(this.farmerId);
    this.service.getCropByFarmerIdfalse(this.farmerId).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   

  }

  handleSuccessfulResponse(response:any){
    this.crops = response;
    console.log(response);
    
  }

    update(editCrop: Crops) {
    this.service.update(editCrop);
    this.router.navigate(['/editcrop']); //updating the employee
  }


}
