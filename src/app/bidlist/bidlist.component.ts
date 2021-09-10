import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid, BidService} from '../bid.service';

@Component({
  selector: 'app-bidlist',
  templateUrl: './bidlist.component.html',
  styleUrls: ['./bidlist.component.css']
})
export class BidlistComponent implements OnInit {

bids: Bid[] ;
  constructor(private bidservice:BidService,private router: Router) {}

  ngOnInit(): any {
    this.bidservice.getBidsByBidderId(123).subscribe(
      response=>this.handleSuccessfulResponse(response)
        );
  }

  handleSuccessfulResponse(response:any){
    this.bids = response;
    console.log(response);
  }
  update(editBids: Bid) {
    this.bidservice.update(editBids);
    this.router.navigate(['/updatebid']); //updating bids
  }
}
