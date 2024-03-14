import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontoffice/home/home.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormsModule } from '@angular/forms/forms';

import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { ForgotPasswordComponent } from './components/auth-components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RequeteComponent } from './components/requete/requete.component';
import { KpiComponent } from './components/kpi/kpi.component';
import { AddKpiComponent } from './components/add-kpi/add-kpi.component';
import { AddDatabaseComponent } from './components/add-database/add-database.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes =[
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule)
  }]},
  
  {
    path: 'kpi',
   component: KpiComponent,
  }, 
  {
    path: 'requete',
   component: RequeteComponent,
  }, 

 
 
  {
    path: '**',
    redirectTo: 'home'
  }, {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
