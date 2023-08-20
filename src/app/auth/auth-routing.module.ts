import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
   
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'change-password', component: ChangePasswordComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  ,
  exports: [RouterModule]
})
export class AuthRoutingModule { }
