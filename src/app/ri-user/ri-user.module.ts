import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import { RiUserLoginComponent } from './ri-user-login/ri-user-login.component';
import { RiUserLogoffComponent } from './ri-user-logoff/ri-user-logoff.component';
import { RiUserRegistrationComponent } from './ri-user-registration/ri-user-registration.component';
import { RiUserListComponent } from './ri-user-list/ri-user-list.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule
  ],
  declarations: [RiUserLoginComponent, RiUserLogoffComponent, RiUserRegistrationComponent, RiUserListComponent],
  exports: [RiUserModule]
})
export class RiUserModule { }
