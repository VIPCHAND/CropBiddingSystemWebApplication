import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crops, CropService } from '../services/crop.service';
import { Farmer, FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.css']
})
export class AddCropComponent implements OnInit {
 farmer:Farmer;
  crop:Crops;
  farmerId:number;

  constructor(private router:Router,private service:CropService,private farmerService:FarmerService) { 
  }
 
  ngOnInit(): any {
    this.farmerId = this.farmerService.getfarmerId();
    this.service.getFarmerById(this.farmerId).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
     console.log("initialized farmer data");
  }
  handleSuccessfulResponse(response:any){
    this.farmer = response;
    console.log(response);
  }

  

   onSubmit(addcrop:Crops){ 
    this.crop = addcrop;
    this.crop.farmer = this.farmer;
      console.log(this.crop);
     this.service.insertCrop(this.crop).subscribe(data => {
      alert(data);
      this.router.navigate(['/croplist']);
    });

  }
  

    cropTypeList:CropType[] = [
    new CropType("Khaki"),
    new CropType('Paddy'),
    new CropType('red soil')
  ];

  fertilizerList:FertilizerType[]=[
    new FertilizerType("Nitrogen based"),
    new FertilizerType("Phosphorus based"),
    new FertilizerType("Complex")

  ];

}


export class CropType {
  
  name:string;
  constructor(name:string) {
    this.name=name;
  }

}

export class FertilizerType{
  name:string;
  constructor(name:string){
    this.name=name;
  }
}