import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCropComponent } from './add-crop/add-crop.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { EditCropComponent } from './edit-crop/edit-crop.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{ path: 'admin', component: AdminHomePageComponent },
{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent },
{ path: 'croplist', component: CropListComponent },
{ path: 'login', component: LoginComponent },
{ path: 'addcrop', component: AddCropComponent },
{ path: 'editcrop',component:EditCropComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
