import { Component } from '@angular/core';
import { DropDownAnimation } from './sidebar.animation';

interface MenuItem {
  title: string;
  iconSrc: string;
  items: SubMenuItem[];
  isOpen: boolean;
  isSelected: boolean;
  routerLink?: string;
}

interface SubMenuItem {
  title: string;
  isSelected: boolean;
  routerLink?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [DropDownAnimation]
})
export class SidebarComponent {
  isOpen = false;

  menus: MenuItem[] = [
    { title: 'Dashboard', items: [], isOpen: false, iconSrc: '/assets/icons/dash.svg', isSelected: false, routerLink: '/dashboard' },
    {
      title: 'Users', items: [
        { title: 'Add', isSelected: false, routerLink: '/users/new' },
        { title: 'List', isSelected: false, routerLink: '/users' },
      ], isOpen: false, iconSrc: '/assets/icons/users.svg', isSelected: false, routerLink: ''
    },
  ];

  toggleMenu(index: number, length: number): void {
    if (length) {
      this.menus[index].isOpen = !this.menus[index].isOpen;
    }
  }
}
