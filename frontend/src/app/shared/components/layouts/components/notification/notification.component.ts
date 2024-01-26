import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  items: any = [
    {
      title: '8 Invoices have been paid',
      icon: 'invoice.svg',
      date: '14 mins ago'
    },
    {
      title: 'Allow users to like products',
      icon: 'pdf.svg',
      date: '30 mins ago'
    },
    {
      title: 'Live visits on our site',
      icon: 'task.svg',
      date: '5 hours ago'
    },
  ]
}
