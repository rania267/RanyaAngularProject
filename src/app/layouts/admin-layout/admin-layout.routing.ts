import { Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { TypographyComponent } from '../../typography/typography.component';

import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';

import { UpgradeComponent } from '../../upgrade/upgrade.component';


import { RequeteComponent } from '../../components/requete/requete.component';
import { KpiComponent } from '../../components/kpi/kpi.component';
import { AddKpiComponent } from '../../components/add-kpi/add-kpi.component';
import { AddDatabaseComponent } from '../../components/add-database/add-database.component';
import { DatabaseListComponent } from '../../components/database-list/database-list.component';
import { LaunchScriptComponent } from '../../components/launch-script/launch-script.component';
import { GlobalViewComponent } from '../../components/global-view/global-view.component';
import { DetailedViewComponent } from '../../components/detailed-view/detailed-view.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requete',      component: RequeteComponent },
  { path: 'kpi',      component: KpiComponent },
  { path: 'addKpi',      component: AddKpiComponent },
  { path: 'addDatabase',      component: AddDatabaseComponent },
  { path: 'databaseList',      component: DatabaseListComponent },
  { path: 'launchScript',      component: LaunchScriptComponent },
  { path: 'globalView',      component: GlobalViewComponent },
  { path: 'launchScript',      component: LaunchScriptComponent },
  { path: 'detailedView',      component: DetailedViewComponent },
  { path: 'addKpi',      component: AddKpiComponent },

  { path: 'tasksList',      component: TasksListComponent },

  { path: 'user-profile', component: UserProfileComponent },

    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'upgrade',        component: UpgradeComponent }



];


