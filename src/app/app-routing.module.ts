import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RiUserLoginComponent } from './ri-user/ri-user-login/ri-user-login.component';
import { RiUserRegistrationComponent } from './ri-user/ri-user-registration/ri-user-registration.component';

const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'login', component: RiUserLoginComponent },
    { path: 'registration', component: RiUserRegistrationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }