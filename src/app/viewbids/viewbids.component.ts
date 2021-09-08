import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BidService,Bid } from '../bid.service';

@Component({
  selector: 'app-viewbids',
  templateUrl: './viewbids.component.html',
  styleUrls: ['./viewbids.component.css']
})
export class ViewbidsComponent implements OnInit {

   bid:Bid[];
  constructor(private service:BidService,private router: Router) { }

  ngOnInit(): any {
    this.service.getBidsByCropId(123).subscribe(
      response => this.handleSuccessfulResponse(response),

    );
   }

   handleSuccessfulResponse(response:any){
    this.bid = response;
    console.log(response);
    
  }
}
