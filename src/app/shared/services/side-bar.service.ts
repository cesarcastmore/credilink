import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  toggled = true;
  _hasBackgroundImage = false;
  menus = [
    {
      title: 'Credilink',
      type: 'header'
    },  {
      title: 'Home',
      icon: 'fa fa-home',
      active: false,
      type: 'simple',
      href: '/analisis'
    },{
      title: 'Salir',
      icon: 'fa fa-home',
      active: false,
      type: 'simple',
      href: '/logout'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}