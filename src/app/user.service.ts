import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders} from '@angular/common/http';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url:String="http://localhost:8586/cropBiddingApplication"

  status:boolean;

  public setloggin(stat:boolean){
    this.status = stat;

  }
  public isUserLoggedIn(){
    return this.status;
  }
  constructor(private httpService:HttpClient ) { }
  public login(user: User) {
    
    console.log("ins service add");
    console.log(user);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/login", user,  { responseType: 'text',headers:headers});
  }  
  
}
 export class User {
  userId: number;
  password: String;
  role: String;
  fullName: String;
  mobile: String;
  address: String;
  aadhar: String;

}
