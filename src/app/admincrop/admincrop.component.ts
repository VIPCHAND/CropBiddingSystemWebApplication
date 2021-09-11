import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Crops, CropService } from '../services/crop.service';

@Component({
  selector: 'app-admincrop',
  templateUrl: './admincrop.component.html',
  styleUrls: ['./admincrop.component.css']
})
export class AdmincropComponent implements OnInit {

 
  crops:Crops[];
  constructor(private cropservice:CropService,private router: Router,private adminservice:AdminService) { }

  ngOnInit(): any {
    this.cropservice.fetchCrop().subscribe(response => this.handleSuccessfulResponse(response));
  }
 
  handleSuccessfulResponse(response:any){
    this.crops = response;
    console.log(response);
  }
  update(viewbids: Crops) {
    this.cropservice.update(viewbids);
    this.router.navigate(['/ahome']); //updating the employee
  }
  
  approveCrop(approvecrop: Crops) {
    this.adminservice.approveCrop(approvecrop).subscribe(data => {alert(data);  this.router.navigate(['/ahome']);});
  
    
   //updating status
  }
}
