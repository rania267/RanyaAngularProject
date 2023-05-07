import { Routes } from '@angular/router';
import {OffreListComponent} from '../../offre/offre-list/offre-list.component';
import {ListRequestComponent} from '../../Request/list-request/list-request.component';
import { UpdateDeliveryComponent } from '../../update-delivery/update-delivery.component';
import { UpdateContractComponent } from '../../update-contract/update-contract.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { SurveryResultsComponent } from '../../survery-results/survery-results.component';
import { ContractStatisticsComponent } from '../../contract-statistics/contract-statistics.component';
import { ContractDetailsComponent } from '../../contract-details/contract-details.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { DeliveryDateComponent } from '../../delivery-date/delivery-date.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProductsComponent } from '../../products/products.component';
import { CommandsComponent } from '../../commands/commands.component';
import { RecieversComponent } from '../../recievers/recievers.component';
import { UsersComponent } from '../../users/users.component';
import { ContractComponent } from '../../contract/contract.component';
import { AddDeliveryComponent } from '../../add-delivery/add-delivery.component';
import { DeliveryComponent } from '../../delivery/delivery.component';
import { AddContractComponent } from '../../add-contract/add-contract.component';
import { DeliveryDetailsComponent } from '../../delivery-details/delivery-details.component';
export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products',      component: ProductsComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'recievers', component: RecieversComponent },
  { path: 'users',   component: UsersComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'delivery',        component: DeliveryComponent },

 { path: 'contract',        component: ContractComponent },
 { path: 'add-delivery',        component: AddDeliveryComponent },
 { path: 'add-contract',        component: AddContractComponent },
 { path: 'update-contract/:id',        component: UpdateContractComponent },
 {path: 'delivery-details/:id', component: DeliveryDetailsComponent},
 {path: 'contract-details/:id', component: ContractDetailsComponent},
 { path: 'update-delivery/:id', component: UpdateDeliveryComponent },
 { path: 'delivery-date', component: DeliveryDateComponent },
 { path: 'contract-statistics', component: ContractStatisticsComponent },

 { path: 'notifications',  component: NotificationsComponent },
 { path: 'offres',  component: OffreListComponent },
 { path: 'requests',  component: ListRequestComponent }
];


