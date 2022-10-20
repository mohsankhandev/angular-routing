import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuniComponent } from './muni/muni.component';
import { AliComponent } from './ali/ali.component';

@NgModule({
  declarations: [
    AppComponent,
    MuniComponent,
    AliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
