import { Component } from '@angular/core';
import { IFolderBox } from '../../../../../core/interfaces';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss'
})
export class AssetsComponent {
  boxes: IFolderBox[] = [
    { name: 'Projects', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Documents', capacity: '7.5 GB', files: '1572 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Media', capacity: '2.5 GB', files: '12341 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Applications', capacity: '5.0 GB', files: '2487 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'ET Template', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'React Template', capacity: '7.5 GB', files: '1572 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Material UI', capacity: '2.8 GB', files: '12341 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'WP Themes', capacity: '5.0 GB', files: '2487 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Personal Photos', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Mobile Apps', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Important Files', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Angular Template', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'folder.png' },
  ]
}
