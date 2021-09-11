import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  adminId:number;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminId = this.adminService.getAdminId();
    console.log(this.adminId +"admin home"); 
    this.adminService.setAdminId(this.adminId);
  }

}
