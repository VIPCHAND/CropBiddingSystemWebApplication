import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  public loggedInAsAdmin() {
    
    let user = sessionStorage.getItem("role");
    console.log(user);
    console.log(!(user === "admin"));
    return !(user === null);
  }
}
