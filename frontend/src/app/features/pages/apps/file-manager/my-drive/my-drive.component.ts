import { Component } from '@angular/core';
import { IFileBox, IFileList, IFolderBox } from '../../../../../core/interfaces';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrl: './my-drive.component.scss'
})
export class MyDriveComponent {
  boxes: IFolderBox[] = [
    { name: 'Projects', capacity: '4.5 GB', files: '387 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Documents', capacity: '7.5 GB', files: '1572 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Media', capacity: '2.5 GB', files: '12341 Files', check: false, link: '', icon: 'folder.png' },
    { name: 'Applications', capacity: '5.0 GB', files: '2487 Files', check: false, link: '', icon: 'folder.png' },
  ]

  filesList: IFileList[] = [
    {
      name: 'Product UI/UX Design',
      icon: 'folder.png',
      owner: 'Danielle Thompson',
      fileSize: '0.7 GB',
      listedDate: 'Mar 08, 2023',
      fileItem: '02',
    },
    {
      name: 'App Design & Development',
      icon: 'folder.png',
      owner: 'Coder Themes',
      fileSize: '521 MB',
      listedDate: 'Feb 13, 2023',
      fileItem: '06',
    },
    {
      name: 'Annualreport.pdf',
      icon: 'folder.png',
      owner: 'Cooper Sharwood',
      fileSize: '12.5 GB',
      listedDate: 'Nov 29, 2022',
      fileItem: '05',
    },
    {
      name: 'Ubold-sketch-design.zip',
      icon: 'folder.png',
      owner: 'Gary Coley',
      fileSize: '64.2 MB',
      listedDate: 'Dec 18, 2022',
      fileItem: '03',
    },
    {
      name: 'Wireframes',
      icon: 'folder.png',
      owner: 'Jasper Rigg',
      fileSize: '8.3 MB',
      listedDate: 'Nov 25, 2022',
      fileItem: '01',
    },
  ]

  files: IFileBox[] = [
    { name: 'sketch-design.zip', icon: 'jpg.png', link: '' },
    { name: 'Compile.png', icon: 'jpg.png', link: '' },
    { name: 'Integrations.pdf', icon: 'pdf2.png', link: '' },
    { name: 'contact@32.txt', icon: 'txt.png', link: '' },
    { name: 'app-Design.doc', icon: 'doc.png', link: '' },
    { name: 'image02.png', icon: 'png.png', link: '' },
    { name: 'Ubold-sketch.doc', icon: 'doc.png', link: '' },
    { name: 'Annualreport.txt', icon: 'txt.png', link: '' },
    { name: 'Wireframes.xl4', icon: 'xl4.png', link: '' },
    { name: 'contact@32.jpg', icon: 'jpg.png', link: '' },
  ]
}
