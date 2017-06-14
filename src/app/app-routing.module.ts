import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RiUserLoginComponent } from './ri-user/ri-user-login/ri-user-login.component';
import { RiUserRegistrationComponent } from './ri-user/ri-user-registration/ri-user-registration.component';
import { RiUserLogoffComponent } from './ri-user/ri-user-logoff/ri-user-logoff.component';
import { RiUserListComponent } from './ri-user/ri-user-list/ri-user-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: RiUserLoginComponent },
    { path: 'registration', component: RiUserRegistrationComponent },
    { path: 'logoff', component: RiUserLogoffComponent },
    { path: 'list', component: RiUserListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }