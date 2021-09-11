import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Bidder, BidderService } from '../services/bidder.service';


@Component({
  selector: 'app-adminbidder',
  templateUrl: './adminbidder.component.html',
  styleUrls: ['./adminbidder.component.css']
})
export class AdminbidderComponent implements OnInit {

  bidder:any;

  constructor(private service:BidderService,private router: Router,private adminservice:AdminService) { 

  }

  ngOnInit(): any {
    this.service.getAllBiddersByStatusfalse().subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   

  }

  handleSuccessfulResponse(response:any){
    this.bidder = response;
    console.log(response);
    
  }


  approveBidder(approveBidder:Bidder) {
    this.adminservice.approveBidder(approveBidder).subscribe(data => {alert(data);  this.router.navigate(['/admin']);});

}
}
