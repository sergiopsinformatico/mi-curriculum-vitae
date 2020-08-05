import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainProfileComponent } from './main-profile/main-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainProfileComponent]
})
export class AppModule { }
