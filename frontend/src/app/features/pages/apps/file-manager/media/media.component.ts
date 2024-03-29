import { Component } from '@angular/core';
import { IFileList } from '../../../../../core/interfaces';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
  filesList: IFileList[] = [
    {
      name: 'Product UI/UX Design',
      icon: 'gallery.png',
      owner: 'Danielle Thompson',
      fileSize: '0.7 GB',
      listedDate: 'Mar 08, 2023',
      fileItem: '02',
    },
    {
      name: 'App Design & Development',
      icon: 'gallery.png',
      owner: 'Coder Themes',
      fileSize: '521 MB',
      listedDate: 'Feb 13, 2023',
      fileItem: '06',
    },
    {
      name: 'Annualreport.pdf',
      icon: 'gallery.png',
      owner: 'Cooper Sharwood',
      fileSize: '12.5 GB',
      listedDate: 'Nov 29, 2022',
      fileItem: '05',
    },
    {
      name: 'Ubold-sketch-design.zip',
      icon: 'gallery.png',
      owner: 'Gary Coley',
      fileSize: '64.2 MB',
      listedDate: 'Dec 18, 2022',
      fileItem: '03',
    },
    {
      name: 'Wireframes',
      icon: 'gallery.png',
      owner: 'Jasper Rigg',
      fileSize: '8.3 MB',
      listedDate: 'Nov 25, 2022',
      fileItem: '01',
    },
    {
      name: 'Product UI/UX Design',
      icon: 'gallery.png',
      owner: 'Danielle Thompson',
      fileSize: '0.7 GB',
      listedDate: 'Mar 08, 2023',
      fileItem: '02',
    },
    {
      name: 'App Design & Development',
      icon: 'gallery.png',
      owner: 'Coder Themes',
      fileSize: '521 MB',
      listedDate: 'Feb 13, 2023',
      fileItem: '06',
    },
    {
      name: 'Annualreport.pdf',
      icon: 'gallery.png',
      owner: 'Cooper Sharwood',
      fileSize: '12.5 GB',
      listedDate: 'Nov 29, 2022',
      fileItem: '05',
    },
    {
      name: 'Ubold-sketch-design.zip',
      icon: 'gallery.png',
      owner: 'Gary Coley',
      fileSize: '64.2 MB',
      listedDate: 'Dec 18, 2022',
      fileItem: '03',
    },
    {
      name: 'Wireframes',
      icon: 'gallery.png',
      owner: 'Jasper Rigg',
      fileSize: '8.3 MB',
      listedDate: 'Nov 25, 2022',
      fileItem: '01',
    },
    {
      name: 'Product UI/UX Design',
      icon: 'gallery.png',
      owner: 'Danielle Thompson',
      fileSize: '0.7 GB',
      listedDate: 'Mar 08, 2023',
      fileItem: '02',
    },
    {
      name: 'App Design & Development',
      icon: 'gallery.png',
      owner: 'Coder Themes',
      fileSize: '521 MB',
      listedDate: 'Feb 13, 2023',
      fileItem: '06',
    },
    {
      name: 'Annualreport.pdf',
      icon: 'gallery.png',
      owner: 'Cooper Sharwood',
      fileSize: '12.5 GB',
      listedDate: 'Nov 29, 2022',
      fileItem: '05',
    },
    {
      name: 'Ubold-sketch-design.zip',
      icon: 'gallery.png',
      owner: 'Gary Coley',
      fileSize: '64.2 MB',
      listedDate: 'Dec 18, 2022',
      fileItem: '03',
    },
    {
      name: 'Wireframes',
      icon: 'gallery.png',
      owner: 'Jasper Rigg',
      fileSize: '8.3 MB',
      listedDate: 'Nov 25, 2022',
      fileItem: '01',
    },
  ]
}
