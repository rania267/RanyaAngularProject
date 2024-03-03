import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    showSubMenu?: boolean; 

    children?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
  ,
  { 
    path: '/products', 
    title: 'Manage KPIs/Queries', 
    icon: 'business_chart-bar-32', 
    class: '',
    children: [
      { path: '/requete', title: 'Queries List', icon: 'design_bullet-list-67', class: '' },
      { path: '/kpi', title: 'KPIs List', icon: 'design_bullet-list-67', class: '' },
      { path: '/addKpi', title: ' Add KPIs & Queries', icon: 'design_bullet-list-67', class: '' }
    ]
    
  },  { path: '/commands', title: 'Manage Connection  ', icon: 'business_badge', class: '',
  children: [
    { path: '/addDatabase', title: 'Add Database', icon: 'design_bullet-list-67', class: '' },
    { path: '/databaseList', title: 'Databases List', icon: 'design_bullet-list-67', class: '' }  ] },
  { path: '/receivers', title: 'Realtime Tests', icon: 'text_caps-small', class: '' 
  ,
  children: [
    { path: '/launchScript', title: 'Launch Script', icon: 'design_bullet-list-67', class: '' }
  ]},
  { path: '/users', title: 'Consultation', icon: 'business_badge', class: '' ,
  children: [
    { path: '/globalView', title: 'Global View', icon: 'design_bullet-list-67', class: '' },
    { path: '/detailedView', title: 'Detailed View', icon: 'design_bullet-list-67', class: '' }
  ] },
  { path: '/delivery', title: 'Scheduled Tests', icon: 'text_caps-small', class: '' ,
  children: [
    { path: '/tasksList', title: 'Tasks List', icon: 'design_bullet-list-67', class: '' },

  ] },
  { path: '/contract', title: 'Contracts', icon: 'business_badge', class: '' },
  { path: '/archives', title: 'Archives', icon: 'shopping_box', class: '' },
  { path: '/requests', title: 'requests', icon: 'objects_diamond', class: '' },
  { path: '/offres', title: 'offres', icon: 'objects_diamond', class: '' },
  { path: '/locations', title: 'Locations', icon: 'location_world', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    /*{ path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }*/

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  toggleSubMenu(menuItem: RouteInfo): void {
    menuItem.showSubMenu = !menuItem.showSubMenu;
  }
  
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
