import { Component } from '@angular/core';
import { DropDownAnimation } from './sidebar.animation';

// interface MenuItem {
//   title: string;
//   iconSrc: string;
//   items: SubMenuItem[];
//   isOpen: boolean;
//   isSelected: boolean;
//   routerLink?: string;
// }

// interface SubMenuItem {
//   title: string;
//   isSelected: boolean;
//   routerLink?: string;
// }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [DropDownAnimation]
})
export class SidebarComponent {
  isOpen = false;

  menuItems: any[] = [
    {
      category: 'MAIN',
      menus: [
        {
          title: 'Dashboard', items: [
            { title: 'eCommerce', isSelected: false, routerLink: '/dashboard/eCommerce' },
            { title: 'Analytics', isSelected: false, routerLink: '/dashboard/analyics' },
            { title: 'Project Management', isSelected: false, routerLink: '/pmanage' },
            { title: 'LMS Courses', isSelected: false, routerLink: '/lms' },
          ],
          isOpen: false,
          iconSrc: 'dash.svg',
          iconSelectedSrc: 'dash-s.svg',
          isSelected: false,
          routerLink: '/dashboard'
        },
        // {
        //   title: 'Users',
        //   items: [],
        //   isOpen: false,
        //   iconSrc: 'dash.svg',
        //   iconSelectedSrc: 'dash-s.svg',
        //   isSelected: false,
        //   routerLink: '/hossein'
        // },
        // {
        //   title: 'Users', items: [
        //     { title: 'Add', isSelected: false, routerLink: '/users/users/new' },
        //     { title: 'List', isSelected: false, routerLink: '/users/list' },
        //   ],
        //   isOpen: false,
        //   iconSrc: 'users.svg',
        //   iconSelectedSrc: 'users-s.svg',
        //   isSelected: false,
        //   routerLink: '/users'
        // },
      ]
    },
    {
      category: 'APPS',
      menus: [
        {
          title: 'File Manager', items: [
            { title: 'My Drive', isSelected: false, routerLink: '/apps/file-manager/my-drive' },
            { title: 'Assets', isSelected: false, routerLink: '/apps/file-manager/assets' },
            { title: 'Projects', isSelected: false, routerLink: '/apps/file-manager/projects' },
            { title: 'Personal', isSelected: false, routerLink: '/apps/file-manager/personal' },
            { title: 'Templates', isSelected: false, routerLink: '/apps/file-manager/templates' },
            { title: 'Documents', isSelected: false, routerLink: '/apps/file-manager/documents' },
            { title: 'Media', isSelected: false, routerLink: '/apps/file-manager/media' },
            { title: 'Recent Files', isSelected: false, routerLink: '/apps/file-manager/recent-files' },
          ],
          isOpen: false,
          iconSrc: 'layer.svg',
          iconSelectedSrc: 'layer-s.svg',
          isSelected: false,
          routerLink: '/apps'
        },
        // { title: '', items: [], isOpen: false, iconSrc: '/assets/icons/.svg', isSelected: false, routerLink: '' },
        // {
        //   title: 'Users', items: [
        //     { title: 'Add', isSelected: false, routerLink: '/users/new' },
        //     { title: 'List', isSelected: false, routerLink: '/users' },
        //   ], isOpen: false, iconSrc: '/assets/icons/users.svg', isSelected: false, routerLink: ''
        // },
      ]
    },
  ];

  toggleSubMenu(menu: any) {
    // Set isSelected to true for the selected menu
    menu.isSelected = true;

    // Set isSelected to false for all other menus
    this.menuItems.forEach((category) => {
      category.menus.forEach((item: any) => {
        if (item !== menu) {
          item.isSelected = false;
        }
      });
    });

    // Toggle the isOpen property as before
    menu.isOpen = !menu.isOpen;
  }

}
