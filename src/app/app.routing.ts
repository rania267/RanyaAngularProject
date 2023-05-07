import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryFrontComponent } from './delivery-front/delivery-front.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { DeliveryDateComponent } from './delivery-date/delivery-date.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormsModule } from '@angular/forms/forms';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { UpdateDeliveryComponent } from './update-delivery/update-delivery.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { ContractComponent } from './contract/contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ContractStatisticsComponent } from './contract-statistics/contract-statistics.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ReviewComponent } from './review/review.component';
import { SurveryResultsComponent } from './survery-results/survery-results.component';
import { DeliveryDistanceComponent } from './delivery-distance/delivery-distance.component';
import { DeliveryClaimComponent } from './delivery-claim/delivery-claim.component';
import { DeliveryPersonComponent } from './delivery-person/delivery-person.component';
import { ContractFrontComponent } from './contract-front/contract-front.component';
import { UpdateContractComponent } from './update-contract/update-contract.component';
import { DeliverycostComponent } from './deliverycost/deliverycost.component';
const routes: Routes =[
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
    path: 'add-delivery',
    component: AddDeliveryComponent,
  },
  {
    path: 'delivery',
   component: DeliveryComponent,
  },  
  {path: 'update-delivery/:id', component: UpdateDeliveryComponent},
  {path: 'delivery-details/:id', component: DeliveryDetailsComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'add-contract', component: AddContractComponent},
  {path: 'contract-statistics', component: ContractStatisticsComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'survey-result', component: SurveryResultsComponent},
  {path: 'delivery-distance', component: DeliveryDistanceComponent},
  {path: 'delivery-claim', component: DeliveryClaimComponent},
  {path: 'delivery-person', component: DeliveryPersonComponent},
  {path: 'delivery-date', component: DeliveryDateComponent},
  {path: 'delivery-front', component: DeliveryFrontComponent},
  {path: 'contract-front', component: ContractFrontComponent},
  {path: 'update-contract/:id', component: UpdateContractComponent},
  {path: 'contract-details/:id', component: ContractDetailsComponent},
  {path: 'deliverycost', component: DeliverycostComponent},
 
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
