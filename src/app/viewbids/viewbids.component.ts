import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid, BidService } from '../services/bid.service';
import { CropService } from '../services/crop.service';


@Component({
  selector: 'app-viewbids',
  templateUrl: './viewbids.component.html',
  styleUrls: ['./viewbids.component.css']
})
export class ViewbidsComponent implements OnInit {
   crop:any;
   bid:Bid[];
  constructor(private bidservice:BidService,private router: Router,private cropservice:CropService) { 
    this.crop=this.cropservice.updateMethod();
    console.log(this.crop);
  }

  ngOnInit(): any {
    this.bidservice.getBidsByCropId(this.crop.cropId).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   }

   handleSuccessfulResponse(response:any){
    this.bid = response;
    console.log(response);
    
  }

}
