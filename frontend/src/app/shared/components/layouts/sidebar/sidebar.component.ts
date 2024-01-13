import { Component } from '@angular/core';
import { DropDownAnimation } from './sidebar.animation';

interface MenuItem {
  title: string;
  items: string[];
  isOpen: boolean;
  subMenuOpen: boolean;
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
    { title: 'Dashboard', items: [], isOpen: false, subMenuOpen: false },
    { title: 'Menu 1', items: ['Item 1-1', 'Item 1-2'], isOpen: false, subMenuOpen: false },
    { title: 'Menu 2', items: ['Item 2-1', 'Item 2-2'], isOpen: false, subMenuOpen: false },
    { title: 'Menu 3', items: ['Item 3-1', 'Item 3-2'], isOpen: false, subMenuOpen: false },
  ];

  toggleMenu(index: number): void {
    this.menus[index].isOpen = !this.menus[index].isOpen;
  }

  toggleSubMenu(index: number): void {
    this.menus[index].subMenuOpen = !this.menus[index].subMenuOpen;
  }
}
