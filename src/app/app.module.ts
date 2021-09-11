import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FarmerHomePageComponent } from './farmer-home-page/farmer-home-page.component';
import { BidderHomePageComponent } from './bidder-home-page/bidder-home-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddCropComponent } from './add-crop/add-crop.component';
import { EditCropComponent } from './edit-crop/edit-crop.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';
import { BidlistComponent } from './bidlist/bidlist.component';
import { AddbidComponent } from './addbid/addbid.component';
import { ViewbidsComponent } from './viewbids/viewbids.component';
import { ViewmycropsComponent } from './viewmycrops/viewmycrops.component';
import { MarketComponent } from './market/market.component';
import { PlacebidComponent } from './placebid/placebid.component';
import { UpdatebidComponent } from './updatebid/updatebid.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FarmerHomePageComponent,
    BidderHomePageComponent,
    AdminHomePageComponent,
    CropListComponent,
    AddCropComponent,
    EditCropComponent,
    FarmerregistrationComponent,
    BidderregistrationComponent,
    BidlistComponent,
    AddbidComponent,
    ViewbidsComponent,
    ViewmycropsComponent,
    MarketComponent,
    PlacebidComponent,
    UpdatebidComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,FormsModule, BrowserAnimationsModule 
 ,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
