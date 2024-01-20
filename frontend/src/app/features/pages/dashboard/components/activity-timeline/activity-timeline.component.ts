import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html',
  styleUrl: './activity-timeline.component.scss'
})
export class ActivityTimelineComponent {
  items: MenuItem[] | undefined;
  activities: any = [
    {
      title:'8 Invoices have been paid',
      description:'Invoices have been paid to the company Tagus.',
      icon:'pdf.png',
      date:'02:14 PM Today',
    },
    {
      title:'Create a project for client',
      description:'Allow users to like products in Tagus.',
      icon:'avatar.png',
      date:'11:47 PM Wednesday',
    },
    {
      title:'Added new style collection',
      description:'Product uploaded by Tagus Technology Email.',
      icon:'t-shirt.png',
      date:'18 March 2023',
    },
  ]

  ngOnInit() {
    this.items = [
      {
        label: 'Add',
        icon: 'pi pi-plus-circle'
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash'
      },
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
    ]
  }
}
