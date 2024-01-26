import { Component } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.scss'
})
export class EmailsComponent {
  items: any = [
    {
      title: '8 Invoices have been paid',
      icon: 'hbsoft.jpg',
      date: '14 mins ago'
    },
    {
      title: 'Allow users to like products',
      icon: 'user1.jpg',
      date: '30 mins ago'
    },
    {
      title: 'Your leave is approved',
      icon: 'user14.jpg',
      date: '2 hours ago'
    },
    {
      title: 'Live visits on our site',
      icon: 'user12.jpg',
      date: '5 hours ago'
    },
  ]
}
