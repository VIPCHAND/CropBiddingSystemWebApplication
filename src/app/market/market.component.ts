import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService,Crops,Farmer } from '../crop.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

 crops:Crops[];
  constructor(private service:CropService,private router: Router) { }

  ngOnInit(): any {
    this.service.fetchApprovedCrop().subscribe(response => this.handleSuccessfulResponse(response));
  }
 
  handleSuccessfulResponse(response:any){
    this.crops = response;
    console.log(response);
  }

}
