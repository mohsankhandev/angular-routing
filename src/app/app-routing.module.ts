import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import {Routes, RouterModule} from '@angular/router'
import { AliComponent } from './ali/ali.component';
import { MuniComponent } from './muni/muni.component';
//const routes: Routes = [];

const routes:Routes = [
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
