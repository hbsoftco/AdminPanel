import { Component, Input } from '@angular/core';
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
  @Input() sidebarClass: string = 'sidebar';

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
        {
          title: 'Todo List',
          items: [],
          isOpen: false,
          iconSrc: 'todo-list.svg',
          iconSelectedSrc: 'todo-list-s.svg',
          isSelected: false,
          routerLink: '/to-do-list'
        },
        // {
        //   title: 'Calendar',
        //   items: [],
        //   isOpen: false,
        //   iconSrc: 'todo-list.svg',
        //   iconSelectedSrc: 'todo-list.svg',
        //   isSelected: false,
        //   routerLink: '/calendar'
        // },
        {
          title: 'Email', items: [
            { title: 'Inbox', isSelected: false, routerLink: '/email/inbox' },
            { title: 'Compose', isSelected: false, routerLink: '/email/compose' },
            { title: 'Read Email', isSelected: false, routerLink: '/email/read-email' },
          ],
          isOpen: false,
          iconSrc: 'sms.svg',
          iconSelectedSrc: 'sms-s.svg',
          isSelected: false,
          routerLink: '/email'
        },
        {
          title: 'Chat',
          items: [],
          isOpen: false,
          iconSrc: 'chat.svg',
          iconSelectedSrc: 'chat.svg',
          isSelected: false,
          routerLink: '/chat'
        },
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
