import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Crops, CropService } from '../services/crop.service';

@Component({
  selector: 'app-approvebid',
  templateUrl: './approvebid.component.html',
  styleUrls: ['./approvebid.component.css']
})
export class ApprovebidComponent implements OnInit {

  crops:Crops[];
  constructor(private cropservice:CropService,private router: Router,private adminservice:AdminService) { }

  ngOnInit(): any {
    this.cropservice.fetchApprovedCrop().subscribe(response => this.handleSuccessfulResponse(response));
  }
 
  handleSuccessfulResponse(response:any){
    this.crops = response;
    console.log(response);
  }
  update(viewbids: Crops) {
    this.cropservice.update(viewbids);
    this.router.navigate(['/adminbid']); //updating the employee
  }
  

}
