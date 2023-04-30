import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { __decorate } from 'tslib';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './products/add/add.component';
import { UsersComponent } from './users/users.component';
import { RecieversComponent } from './recievers/recievers.component';
import { CommandsComponent } from './commands/commands.component';
import { NavbarComponent } from './frontoffice/components/navbar/navbar.component';

import { ContactComponent } from './frontoffice/contact/contact.component';
import { ProductComponent } from './frontoffice/product/product.component';


import { DeliveryService } from './services/delivery.service';

import { UpdateDeliveryComponent } from './update-delivery/update-delivery.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';

import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContractComponent } from './contract/contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ContractStatisticsComponent } from './contract-statistics/contract-statistics.component';
import { ReviewComponent } from './review/review.component';
import { SurveryResultsComponent } from './survery-results/survery-results.component';
import { DeliveryDistanceComponent } from './delivery-distance/delivery-distance.component';
import { DeliveryClaimComponent } from './delivery-claim/delivery-claim.component';
import { DeliveryPersonComponent } from './delivery-person/delivery-person.component';
import { DeliveryDateComponent } from './delivery-date/delivery-date.component';
import { FooterComponent } from './frontoffice/components/footer/footer.component';
import { HomeComponent } from './frontoffice/home/home.component';

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
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddComponent,
    UsersComponent,
    RecieversComponent,
    CommandsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    AppComponent,
    AdminLayoutComponent,
    AddComponent,
    UsersComponent,
    RecieversComponent,
    CommandsComponent,
    DeliveryComponent,
    AddDeliveryComponent,
    ContractComponent,
    
    UpdateDeliveryComponent,
    DeliveryDetailsComponent,
    AddContractComponent,
    ContractStatisticsComponent,
    ReviewComponent,
    SurveryResultsComponent,
    DeliveryDistanceComponent,
    DeliveryClaimComponent,
    DeliveryPersonComponent,
    DeliveryDateComponent,
    FooterComponent,
    HomeComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
