import { Component } from '@angular/core';
import { DropDownAnimation } from './sidebar.animation';

interface MenuItem {
  title: string;
  iconSrc: string;
  items: string[];
  isOpen: boolean;
  isSelected: boolean;
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
    { title: 'Dashboard', items: [], isOpen: false, iconSrc: '/assets/icons/home-line.svg', isSelected: false },
    { title: 'Invoice', items: ['List', 'Preview', 'Add', 'Edit'], isOpen: false, iconSrc: '/assets/icons/invoice-line.svg', isSelected: false },
    { title: 'Todo List', items: [], isOpen: false, iconSrc: '/assets/icons/home-line.svg', isSelected: false },
    { title: 'Users', items: ['List', 'Add'], isOpen: false, iconSrc: '/assets/icons/users-line.svg', isSelected: false },
    // { title: 'Menu 3', items: ['Item 3-1', 'Item 3-2'], isOpen: false, iconSrc: '/assets/icons/menu3.svg', isSelected: false },
  ];

  toggleMenu(index: number): void {
    this.menus[index].isOpen = !this.menus[index].isOpen;
  }
}
