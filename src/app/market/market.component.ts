import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crops, CropService } from '../services/crop.service';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
crops:Crops[];
  constructor(private cropservice:CropService,private router: Router) { }

  ngOnInit(): any {
    this.cropservice.fetchApprovedCrop().subscribe(response => this.handleSuccessfulResponse(response));
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
