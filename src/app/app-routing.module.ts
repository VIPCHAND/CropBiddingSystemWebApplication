import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCropComponent } from './add-crop/add-crop.component';
import { AddbidComponent } from './addbid/addbid.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { BidderHomePageComponent } from './bidder-home-page/bidder-home-page.component';
import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';
import { BidlistComponent } from './bidlist/bidlist.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { EditCropComponent } from './edit-crop/edit-crop.component';
import { FarmerHomePageComponent } from './farmer-home-page/farmer-home-page.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketComponent } from './market/market.component';
import { PlacebidComponent } from './placebid/placebid.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewbidsComponent } from './viewbids/viewbids.component';
import { ViewmycropsComponent } from './viewmycrops/viewmycrops.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent },
{ path: 'croplist', component: CropListComponent },
{ path: 'login', component: LoginComponent },
{ path: 'addcrop', component: AddCropComponent },
{ path: 'editcrop',component:EditCropComponent},
{path: 'market',component:MarketComponent},
{path: 'addbid',component:AddbidComponent},
{path: 'registration',component:RegistrationComponent},
{path: 'Breg',component:BidderregistrationComponent},
{path: 'Freg',component:FarmerregistrationComponent},
{path: 'bidlist',component:BidlistComponent},
{ path : 'viewbids', component:ViewbidsComponent},
{ path : 'viewmycrops',component:ViewmycropsComponent},
{ path: 'fhome', component:FarmerHomePageComponent },
{ path: 'bhome', component:BidderHomePageComponent },
{ path: 'placebids',component:PlacebidComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
