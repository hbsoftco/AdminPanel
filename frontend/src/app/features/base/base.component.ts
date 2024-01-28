import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;
  sidebarClass = 'sidebar';
  bodyClass = 'body';

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

    if (this.isSideNavCollapsed) {
      this.sidebarClass = 'collapsed-sidebar'
      this.bodyClass = 'big-body'
    } else {
      this.sidebarClass = 'sidebar'
      this.bodyClass = 'body'
    }

  }

}
