import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url:String="http://localhost:8586/cropBiddingApplication"

  status:boolean;
  userID:String;
  user:User;
  userdata:User = new User();

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
    sessionStorage.setItem("role",this.userdata.role);
    sessionStorage.setItem("userId",this.userdata.userId);

  }

  public getUserDetails(userId:String){

    console.log("get user"); 
  const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<User>("http://localhost:8586/cropBiddingApplication/getUser/" + userId,{ responseType: 'json',headers:headers});
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
  // farmer:Farmer;
  // bidder:Bidder;

}
