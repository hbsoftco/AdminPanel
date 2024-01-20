import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ICustomerOrder } from '../../../../../../core/interfaces';

@Component({
  selector: 'app-new-customers',
  templateUrl: './new-customers.component.html',
  styleUrl: './new-customers.component.scss'
})
export class NewCustomersComponent {
  items: MenuItem[] | undefined;
  customers: ICustomerOrder[] = [
    {
      name: 'Jordan Stevenson',
      username: '@jstevenson5c',
      avatar: 'user12.jpg',
      price: 289.50,
      orders: 15,
    },
    {
      name: 'Lydia Reese',
      username: '@lreese3b',
      avatar: 'user13.jpg',
      price: 999.99,
      orders: 99,
    },
    {
      name: 'Anty Rodes',
      username: '@antyrodes32',
      avatar: 'user14.jpg',
      price: 1000.00,
      orders: 100,
    },
    {
      name: 'David Warner',
      username: '@davidwarner321',
      avatar: 'user1.jpg',
      price: 198.00,
      orders: 22,
    },
  ]

  ngOnInit() {

    this.items = [
      {
        label: 'Today',
      },
      {
        label: 'Last Month',
      },
      {
        label: 'Last Year',
      },
      {
        label: 'All Time',
      },
    ]

  }
}
