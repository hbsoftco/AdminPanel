import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.scss'
})
export class FileManagerComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'My Drive',
        icon: 'pi pi-folder-open',
        expanded: true,
        items: [
          {
            label: 'Assets',
            icon: 'pi pi-circle-fill',
            routerLink: '/apps/file-manager/assets',
          },
          {
            label: 'Projects',
            icon: 'pi pi-circle-fill',
            routerLink: '/apps/file-manager/projects'
          },
          {
            label: 'Personal',
            icon: 'pi pi-circle-fill'
          },
          {
            label: 'Templates',
            icon: 'pi pi-circle-fill',
            routerLink: '/apps/file-manager/templates'
          }
        ]
      },
      {
        label: 'Documents',
        icon: 'pi pi-file',
        routerLink: '/apps/file-manager/documents'
      },
      {
        label: 'Media',
        icon: 'pi pi-image',
      },
      {
        label: 'Recent Files',
        icon: 'pi pi-clock',
      },
      {
        label: 'Important',
        icon: 'pi pi-star',
      },
      {
        label: 'Spam',
        icon: 'pi pi-info-circle',
      },
      {
        label: 'Trash',
        icon: 'pi pi-trash',
      },
    ];
  }
}
