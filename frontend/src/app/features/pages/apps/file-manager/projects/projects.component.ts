import { Component } from '@angular/core';
import { IFolderBox } from '../../../../../core/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  boxes: IFolderBox[] = [
    { name: 'ET Template', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'png.png' },
    { name: 'React Template', capacity: '7.5 GB', files: '1572 Files', check: false, link: '', icon: 'jpg.png' },
    { name: 'Material UI', capacity: '2.5 GB', files: '12341 Files', check: false, link: '', icon: 'txt.png' },
    { name: 'WP Themes', capacity: '5.0 GB', files: '2487 Files', check: false, link: '', icon: 'pdf2.png' },
    { name: 'Personal Photos', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'xl4.png' },
    { name: 'Mobile Apps', capacity: '7.5 GB', files: '1572 Files', check: false, link: '', icon: 'doc.png' },
    { name: 'Important Files', capacity: '2.8 GB', files: '12341 Files', check: false, link: '', icon: 'pdf2.png' },
    { name: 'Angular Template', capacity: '5.0 GB', files: '2487 Files', check: false, link: '', icon: 'png.png' },
    { name: 'Projects', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'jpg.png' },
    { name: 'Documents', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'txt.png' },
    { name: 'Media', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'xl4.png' },
    { name: 'Applications', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'png.png' },
  ]
}
