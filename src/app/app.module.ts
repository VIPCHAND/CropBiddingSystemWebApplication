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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FarmerHomePageComponent,
    BidderHomePageComponent,
    AdminHomePageComponent,
    CropListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
