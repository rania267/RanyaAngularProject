import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { __decorate } from 'tslib';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './frontoffice/components/navbar/navbar.component';

import { ContactComponent } from './frontoffice/contact/contact.component';



import { FooterComponent } from './frontoffice/components/footer/footer.component';
import { HomeComponent } from './frontoffice/home/home.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { ForgotPasswordComponent } from './components/auth-components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RequeteComponent } from './components/requete/requete.component';
import { KpiComponent } from './components/kpi/kpi.component';
import { AddKpiComponent } from './components/add-kpi/add-kpi.component';
import { AddDatabaseComponent } from './components/add-database/add-database.component';
import { DatabaseListComponent } from './components/database-list/database-list.component';
import { LaunchScriptComponent } from './components/launch-script/launch-script.component';
import { GlobalViewComponent } from './components/global-view/global-view.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { UpdateDatabaseComponent } from './components/update-database/update-database.component';
import { UpdateKpiComponent } from './components/update-kpi/update-kpi.component';
import { AddQueryComponent } from './components/add-query/add-query.component';
import { UpdateQueryComponent } from './components/update-query/update-query.component';
import { CorbeilleComponent } from './components/corbeille/corbeille.component';
import { DialogComponent } from './components/dialog/dialog.component';
@NgModule({
  imports: [
   
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    MaterialsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AppComponent,
    AdminLayoutComponent,
  

    FooterComponent,
    HomeComponent,
 
    ConfirmationComponent,
 
 

RequeteComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    RequeteComponent,
KpiComponent,
AddKpiComponent,
AddDatabaseComponent,
DatabaseListComponent,
LaunchScriptComponent,
GlobalViewComponent,
DetailedViewComponent,
TasksListComponent,
AddDataComponent,
ConfirmDialogComponent,
UpdateDatabaseComponent,
UpdateKpiComponent,
AddQueryComponent,
UpdateQueryComponent,
CorbeilleComponent,
DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
