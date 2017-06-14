import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RiUserLoginComponent } from './ri-user/ri-user-login/ri-user-login.component';
import { RiUserRegistrationComponent } from './ri-user/ri-user-registration/ri-user-registration.component';
import { RiUserLogoffComponent } from './ri-user/ri-user-logoff/ri-user-logoff.component';
import { RiUserListComponent } from './ri-user/ri-user-list/ri-user-list.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RiUserLoginComponent,
    RiUserRegistrationComponent,
    RiUserLogoffComponent,
    RiUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
