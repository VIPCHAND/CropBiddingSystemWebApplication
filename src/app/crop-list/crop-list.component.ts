import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService,Crops,Farmer } from '../crop.service';
@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent implements OnInit {

  crops:Crops[];

  constructor(private service:CropService,private router: Router) { }

  ngOnInit(): any {
    this.service.fetchCrop().subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   

  }

  handleSuccessfulResponse(response:any){
    this.crops = response;
    console.log(response);
    
  }


}
