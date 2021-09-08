import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid, Bidder, BidService, Crops } from '../bid.service';

@Component({
  selector: 'app-addbid',
  templateUrl: './addbid.component.html',
  styleUrls: ['./addbid.component.css']
})
export class AddbidComponent implements OnInit {

   bid:Bid;
  bidder:Bidder;
  crop:Crops;

  constructor(private bidservice:BidService,private router:Router) { }

  ngOnInit(): any {
    this.bidservice.getBidderById(1).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
     console.log("initialized bidder data");

     this.bidservice.getCrop(1).subscribe(
      response=> this.handleSuccessfulResponse2(response),
    );
    console.log("initilized Crop Data");
  }

  handleSuccessfulResponse(response:any){
    this.bidder = response;
    console.log(response);
  }

  

  handleSuccessfulResponse2(response:any){
    this.bidder = response;
    console.log(response);
  }

  onSubmit(addbid:Bid):any{
    this.bid = addbid;
    this.bid.bidder = this.bidder;
    this.bid.bidder.crop = this.crop;
    console.log(this.bid);
    this.bidservice.addBid(this.bid).subscribe(data =>{
      alert(data);
      this.router.navigate(['/bidlist']);
    });

  }

}
