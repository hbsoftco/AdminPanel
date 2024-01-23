import { Component, Input } from '@angular/core';
import { IFolderBox } from '../../../../../../core/interfaces';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-folder-box',
  templateUrl: './folder-box.component.html',
  styleUrl: './folder-box.component.scss'
})
export class FolderBoxComponent {
  @Input() folderBox: IFolderBox | undefined;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Rename',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Download',
        icon: 'pi pi-cloud-download'
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash'
      },
    ]
  }
}
