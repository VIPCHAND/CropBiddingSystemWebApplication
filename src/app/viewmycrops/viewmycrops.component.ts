import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService,Crops,Farmer } from '../crop.service';

@Component({
  selector: 'app-viewmycrops',
  templateUrl: './viewmycrops.component.html',
  styleUrls: ['./viewmycrops.component.css']
})
export class ViewmycropsComponent implements OnInit {

  crops:Crops[];

  constructor(private service:CropService,private router: Router) { }

  ngOnInit(): any {
    this.service.getCropByFarmerId(123).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   

  }

  handleSuccessfulResponse(response:any){
    this.crops = response;
    console.log(response);

}
}
