import { Component } from '@angular/core';
import { Utilities } from '../../../../core/utils/utilities';
import { IInvoice } from '../../../../core/interfaces';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
  invoices: IInvoice[] = []
  items: MenuItem[] | undefined;

  public getStatusClass(type: string): string {
    return Utilities.setStatusClass(type);
  }

  ngOnInit() {
    this.invoices = [
      {
        id: '#14251',
        name: 'Brand Logo Design',
        client: {
          name: 'Lucile Young',
          avatar: 'user8.jpg',
          username: '@lyoung4a',
        },
        issuedDate: '14 Mar 2023',
        total: '$350',
        balance: 'Paid',
      },
      {
        id: '#14251',
        name: 'Redesign - Landing Page',
        client: {
          name: 'Jordan Stevenson',
          avatar: 'user9.jpg',
          username: '@jstevenson5c',
        },
        issuedDate: '12 Feb 2023',
        total: '$400',
        balance: '$400',
      },
      {
        id: '#14251',
        name: 'Landing Page Design',
        client: {
          name: 'Francis Frank',
          avatar: 'user10.jpg',
          username: '@ffrank7e',
        },
        issuedDate: '10 Mar 2023',
        total: '$321',
        balance: 'Paid',
      },
      {
        id: '#14251',
        name: 'Email Template UI',
        client: {
          name: 'Phoebe Patterson',
          avatar: 'user11.jpg',
          username: '@ppatterson2g',
        },
        issuedDate: '08 Mar 2023',
        total: '$200',
        balance: 'Paid',
      },
      {
        id: '#14251',
        name: 'Redesign - Dashboard',
        client: {
          name: 'James Andy',
          avatar: 'user1.jpg',
          username: '@andyjm32',
        },
        issuedDate: '01 Mar 2023',
        total: '$123',
        balance: '$123',
      },
      {
        id: '#14251',
        name: 'hbsoft Dashboard UI',
        client: {
          name: 'Sarah Taylor',
          avatar: 'user2.jpg',
          username: '@taylors32',
        },
        issuedDate: '03 Apr 2023',
        total: '$99',
        balance: '$99',
      },
      {
        id: '#14251',
        name: 'Blog Template Design',
        client: {
          name: 'David Warner',
          avatar: 'user3.jpg',
          username: '@davidwabc2',
        },
        issuedDate: '12 Feb 2023',
        total: '$128',
        balance: '$128',
      },
      {
        id: '#14251',
        name: 'Brand Logo Design',
        client: {
          name: 'Steven Smith',
        avatar: 'user4.jpg',
        username: '@ssmith542',
        },
        issuedDate: '14 Mar 2023',
        total: '$199',
        balance: 'Paid',
      },
      {
        id: '#14251',
        name: 'Opened New Showcase',
        client: {
          name: 'Phoebe Patterson',
        avatar: 'user18.jpg',
        username: '@ppatterson2g',
        },
        issuedDate: '28 Feb 2023',
        total: '$150',
        balance: 'Paid',
      },
      {
        id: '#14251',
        name: 'Updated The Status',
        client: {
          name: 'James Andy',
          avatar: 'user20.jpg',
          username: '@andyjm32',
        },
        issuedDate: '10 Mar 2023',
        total: '$130',
        balance: '$130',
      },
      {
        id: '#14251',
        name: 'Redesign - Landing Page',
        client: {
          name: 'Jordan Stevenson',
          avatar: 'user9.jpg',
          username: '@jstevenson5c',
        },
        issuedDate: '12 Feb 2023',
        total: '$400',
        balance: '$400',
      },
      {
        id: '#14251',
        name: 'Landing Page Design',
        client: {
          name: 'Francis Frank',
          avatar: 'user10.jpg',
          username: '@ffrank7e',
        },
        issuedDate: '10 Mar 2023',
        total: '$321',
        balance: 'Paid',
      },
      {
        id: '#14251',
        name: 'Email Template UI',
        client: {
          name: 'Phoebe Patterson',
          avatar: 'user11.jpg',
          username: '@ppatterson2g',
        },
        issuedDate: '08 Mar 2023',
        total: '$200',
        balance: 'Paid',
      },
      {
        id: '#14251',
        name: 'Redesign - Dashboard',
        client: {
          name: 'James Andy',
          avatar: 'user1.jpg',
          username: '@andyjm32',
        },
        issuedDate: '01 Mar 2023',
        total: '$123',
        balance: '$123',
      },
      {
        id: '#14251',
        name: 'hbsoft Dashboard UI',
        client: {
          name: 'Sarah Taylor',
          avatar: 'user2.jpg',
          username: '@taylors32',
        },
        issuedDate: '03 Apr 2023',
        total: '$99',
        balance: '$99',
      },
      {
        id: '#14251',
        name: 'Blog Template Design',
        client: {
          name: 'James Andy',
          avatar: 'user1.jpg',
          username: '@andyjm32',
        },
        issuedDate: '12 Feb 2023',
        total: '$128',
        balance: '$128',
      },

    ]

    this.items = [
      {
        label: 'Share',
        icon: 'pi pi-share-alt'
      },
      {
        label: 'Rename',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash'
      },
    ]
  }
}
