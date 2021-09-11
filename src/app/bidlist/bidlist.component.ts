import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid, BidService } from '../services/bid.service';
import { Bidder, BidderService } from '../services/bidder.service';


@Component({
  selector: 'app-bidlist',
  templateUrl: './bidlist.component.html',
  styleUrls: ['./bidlist.component.css']
})
export class BidlistComponent implements OnInit {


bids: Bid[] ;
bidderId:number;
  constructor(private bidservice:BidService,private router: Router,private bidderService:BidderService) { }

  ngOnInit(): any {
        this.bidderId = this.bidderService.getBidderId(); 
     this.bidderService.setbidderId(this.bidderId);
    
    this.bidservice.getBidsByBidderId(this.bidderId).subscribe(
        response =>this.handleSuccessfulResponse(response)
        );
  }

  handleSuccessfulResponse(response:any){
    this.bids = response;
    console.log(response);
  }
  update(editBids: Bid) {
    this.bidservice.onUpdate(editBids);
    this.router.navigate(['./updatebid']); //updating bids
  }
}
