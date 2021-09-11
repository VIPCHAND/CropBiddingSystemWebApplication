import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crops, CropService } from '../services/crop.service';


@Component({
  selector: 'app-edit-crop',
  templateUrl: './edit-crop.component.html',
  styleUrls: ['./edit-crop.component.css']
})
export class EditCropComponent implements OnInit {

  crop:any;
  crops : Crops[];
  constructor(private service:CropService,private router:Router) {
    this.crop = this.service.updateMethod();
   }

  ngOnInit(): void {
  }
    onUpdate(crops: Crops): any {
    
    return this.service.editCrop(crops).subscribe(data => {
      alert(data)
      this.router.navigate(['/croplist'])
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