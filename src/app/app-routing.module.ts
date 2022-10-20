import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import {Routes, RouterModule} from '@angular/router'
import { AliComponent } from './ali/ali.component';
import { LoginComponent } from './login/login.component';
import { MuniComponent } from './muni/muni.component';
//const routes: Routes = [];

const routes:Routes = [
  //we redirtto this link inn routing when user hit our site in broser this component 
  {
    path:'', redirectTo:'login' ,pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'ali', component:AliComponent
  },
  {
    path:'muni' , component:MuniComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
