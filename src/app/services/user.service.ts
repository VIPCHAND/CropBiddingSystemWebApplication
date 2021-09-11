import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Farmer } from './farmer.service';
import { Bidder } from './bidder.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url:String="http://localhost:8586/cropBiddingApplication"

  status:boolean;
  userID:String;
  user:User;
  userdata:User = new User();

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.clear();
  }

  public setloggin(stat:boolean){
    this.status = stat;

  }
  public isUserLoggedIn(){
    return this.status;
  }

  public setUserId(userId:String){

    this.userID =userId;
  }
  public getuserId(){
    return this.userID;
  }
  setUserData(user:any){
    this.userdata = user;
    console.log(this.userdata+"user service user data");
    if(this.userdata.bId === 0 && this.userdata.aId === 0 ){
      sessionStorage.setItem("fId",this.userdata.fId.toString());
      sessionStorage.setItem("role",this.userdata.role);
    }
    if(this.userdata.fId === 0 && this.userdata.aId === 0){
      sessionStorage.setItem("bId",this.userdata.bId.toString());
      sessionStorage.setItem("role",this.userdata.role);
    }
     if(this.userdata.fId === 0 && this.userdata.bId === 0 ){
      sessionStorage.setItem("aId",this.userdata.aId.toString());
      sessionStorage.setItem("role",this.userdata.role);
    }
    
   

  }
  fetchUser(){
    return this.userdata;
  }

  public getUserDetails(userId:String){

    console.log("get user"); 
  const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<User>("http://localhost:8586/cropBiddingApplication/getUser/" + userId);
  }

  constructor(private httpService:HttpClient ) { }
  public login(user: User) {
    
    console.log("ins service add");
    console.log(user);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/login", user,  { responseType: 'json',headers:headers});
  }  
  
}
 export class User {
  userId: string;
  password: string;
  role: string;
  fullName: string;
  mobile: string;
  address: string;
  aadhar: string;
  bId:number;
  fId:number;
  aId:number;
  // farmer:Farmer;
  // bidder:Bidder;

}
