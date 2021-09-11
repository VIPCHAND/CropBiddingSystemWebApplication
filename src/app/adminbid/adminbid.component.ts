import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Bid, BidService } from '../services/bid.service';
import { CropService } from '../services/crop.service';

@Component({
  selector: 'app-adminbid',
  templateUrl: './adminbid.component.html',
  styleUrls: ['./adminbid.component.css']
})
export class AdminbidComponent implements OnInit {

 crop:any;
   bid:Bid[];
  constructor(private bidservice:BidService,private router: Router,private cropservice:CropService,private adminservice:AdminService) { 
    this.crop=this.cropservice.updateMethod();
    console.log(this.crop);
  }

  ngOnInit(): any {
    console.log(this.crop.cropId);
    this.bidservice.getBidsByCropId(this.crop.cropId).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   }

   handleSuccessfulResponse(response:any){
    this.bid = response;
    console.log(response);
    
  }
  setwinningbid(bid:Bid)
  {
    this.adminservice.setwinningbid(bid).subscribe(data => {alert(data);  this.router.navigate(['/admin']);});
  
    
   //updating status
  }

}
