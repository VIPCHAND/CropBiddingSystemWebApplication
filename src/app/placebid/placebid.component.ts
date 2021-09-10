import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid,BidService} from '../bid.service';
import { Bidder } from '../bidder.service';
import { CropService,Crops } from '../crop.service';

@Component({
  selector: 'app-placebid',
  templateUrl: './placebid.component.html',
  styleUrls: ['./placebid.component.css']
})
export class PlacebidComponent implements OnInit {

    crop:Crops=new Crops();
  bid:Bid=new Bid();
  bidder:Bidder=new Bidder();
  constructor(private cropservice:CropService,private router: Router,private bidservice:BidService ) { }

  ngOnInit(): any {
    this.cropservice.fetchApprovedCrop().subscribe(
      response=>this.handleSuccessfulResponse(response)

    );
     this.bidservice.getBidderById(1002).subscribe(
      response=>this.handleSuccessfulResponse1(response)
        );
  }
  handleSuccessfulResponse(response:any){
    this.crop = response;
    console.log(response);
  }
  handleSuccessfulResponse1(response:any){

    this.bidder = response;
    console.log(response);
  }
 
  onSubmit(addBid:Bid){
    this.bid = addBid;
    this.crop.isApproved = true;
    this.bid.crop = this.crop;
    this.bid.bidder = this.bidder;
    

    this.bidservice.addBid(addBid).subscribe(data =>{alert(data);
    this.router.navigate(['/bidlist']);//adding bids.
      } 
    
    );
    
  }
}
