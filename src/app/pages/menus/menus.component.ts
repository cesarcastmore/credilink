import { Component, OnInit } from '@angular/core';
import { SideBarService} from '../../shared/services/side-bar.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

faBars = faBars;

  constructor(public sidebarservice: SideBarService) {

  }

  public ngOnInit(){

  }


  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }


  
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

}
