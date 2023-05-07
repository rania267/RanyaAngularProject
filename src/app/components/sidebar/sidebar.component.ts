import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
  { path: '/products', title: 'Products', icon: 'shopping_box', class: '' },
  { path: '/commands', title: 'Commands', icon: 'shopping_basket', class: '' },
  { path: '/receivers', title: 'Recievers', icon: 'health_ambulance', class: '' },
  { path: '/users', title: 'Users', icon: 'business_badge', class: '' },
  { path: '/delivery', title: 'Deliveries', icon: 'business_badge', class: '' },
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
