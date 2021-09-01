import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FarmerHomePageComponent } from './farmer-home-page/farmer-home-page.component';
import { BidderHomePageComponent } from './bidder-home-page/bidder-home-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FarmerHomePageComponent,
    BidderHomePageComponent,
    AdminHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
