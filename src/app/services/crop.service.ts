import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Farmer } from './farmer.service';


@Injectable({
  providedIn: 'root'
})
export class CropService {

  updateCrop : Crops;
  constructor(private httpService: HttpClient) { }

  public update(updatecrop:Crops){

    this.updateCrop = updatecrop;
  }
  public updateMethod() {
    return this.updateCrop;
  }

  public getAllCrops(){
    console.log("ins service get all crops");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Crops>("http://localhost:8586/cropBiddingApplication/crop/fetchAllCrops/");
  }
  
  public fetchApprovedCrop(){
    console.log("ins service get approved crops");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Crops>("http://localhost:8586/cropBiddingApplication/crop/fetchCropsByStatus")
  }

  public fetchCrop(){
    console.log("ins service get added crops");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Crops>(" http://localhost:8586/cropBiddingApplication/crop/fetchCropByStatus")
  }

  public insertCrop(addcrop:Crops){
    console.log("ins service add crops");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.post("http://localhost:8586/cropBiddingApplication/crop/cropCreation",addcrop,{ responseType: 'text',headers});
  }

  public editCrop(edtcrop:Crops){
    console.log("ins service update crops");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.put("http://localhost:8586/cropBiddingApplication/crop/editCrop",edtcrop,{ responseType: 'text',headers});
  }

  public getCropByFarmerId(farmerid:number){
    console.log("ins service get crop by farmer");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Crops>("http://localhost:8586/cropBiddingApplication/crop/fetchCropByFarmer/"+farmerid)
  }
    public getCropByFarmerIdfalse(farmerid:number){
    console.log("ins service get crop by farmer");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Crops>("http://localhost:8586/cropBiddingApplication/crop/fetchCropByFarmerfalse/"+farmerid)
  }

  public getFarmerById(farmerid:number){
    console.log("get farmer");
    const headers = new HttpHeaders().set('Content_Type','text/plain ; charset = utf-8');
    return this.httpService.get<Farmer>("http://localhost:8586/cropBiddingApplication/farmer/getFarmer/"+farmerid)

  }


  
}

export class Crops{
  cropId:number;
  cropName:string;
  cropType: string;
  fertilizer: string;
  quantity: number;
  basePrice: number;
  isApproved: boolean;
  farmer:Farmer;
}


