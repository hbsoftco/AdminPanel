import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IRecentOrder } from '../../../../../../core/interfaces';
import { Utilities } from '../../../../../../core/utils/utilities';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss'
})
export class RecentOrdersComponent {
  products: IRecentOrder[] = []
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.products = [
      {
        id: 1,
        orderId: '#SK258',
        product: 'Laptop Mac Pro',
        image: 'product1.jpg',
        customer: 'Colin Firth',
        price: 289.050,
        vendor: 'Apple',
        date: '01-12-2022',
        status: 'Pending',
        rating: "5.0 (61 Votes)",
      },
      {
        id: 2,
        orderId: '#AA257',
        product: 'Smart Camera XD6',
        image: 'product2.jpg',
        customer: 'Alina Smith',
        price: 876.55,
        vendor: 'Camera',
        date: '02-12-2022',
        status: 'Out of Stock',
        rating: '4.9 (55 Votes)',
      },
      {
        id: 3,
        orderId: '#BB256',
        product: 'Pixi 8 Wireless Airphone',
        image: 'product3.jpg',
        customer: 'James Andy',
        price: 654.76,
        vendor: 'Wireless',
        date: '03-12-2022',
        status: 'Delivered',
        rating: '4.0 (99 Votes)',
      },
      {
        id: 4,
        orderId: '#CC255',
        product: 'Jebble Smart Watch',
        image: 'product4.jpg',
        customer: 'Sarah Taylor',
        price: 654.99,
        vendor: 'Jebble',
        date: '04-12-2022',
        status: 'Pending',
        rating: '5.0 (196 Votes)',
      },
      {
        id: 5,
        orderId: '#DD254',
        product: 'Smart Watch F8 Pro',
        image: 'product5.jpg',
        customer: 'David Warner',
        price: 432.01,
        vendor: 'Watch',
        date: '05-12-2022',
        status: 'Delivered',
        rating: '3.0 (54 Votes)',
      },
      {
        id: 6,
        orderId: '#SK253',
        product: 'Wall Clock Cimbina',
        image: 'product6.jpg',
        customer: 'James Noah',
        price: 100.00,
        vendor: 'Cimbina',
        date: '06-12-2022',
        rating: 'Delivered',
        status: '5.0 (100 Votes)',
      },
      {
        id: 7,
        orderId: '#SK252',
        product: 'Galaxo T6 Munsun',
        image: 'product7.jpg',
        customer: 'William Benjamin',
        price: 99.99,
        vendor: 'Galaxo',
        date: '07-12-2022',
        status: 'Out of Stock',
        rating: '4.0 (99 Votes)',
      },
      {
        id: 8,
        orderId: '#SK251',
        product: 'Tagus Airpod x-Zon',
        image: 'product8.jpg',
        customer: 'Lucas Oliver',
        price: 543.54,
        vendor: 'x-Zon',
        date: '08-12-2022',
        status: 'Pending',
        rating: '3.5 (22 Votes)',
      },
      {
        id: 9,
        orderId: '#SK248',
        product: 'Levitating Headphone',
        image: 'product9.jpg',
        customer: 'Ava Olivia',
        price: 999.99,
        vendor: 'Levitating',
        date: '09-12-2022',
        status: 'Delivered',
        rating: '4.5 (65 Votes)',
      },
      {
        id: 10,
        orderId: '#SK248',
        product: 'Refreshing Water',
        image: 'product10.jpg',
        customer: 'Isabella Sophia',
        price: 321.99,
        vendor: 'Bottle',
        date: '10-12-2022',
        rating: 'Out of Stock',
        status: '5.0 (142 Votes)',
      },
      {
        id: 11,
        orderId: '#SK248',
        product: 'Facial Powders',
        image: 'product11.jpg',
        customer: 'Mia Emma',
        price: 500,
        vendor: 'Table',
        date: '11-12-2022',
        status: 'Pending',
        rating: '4.0 (10 Votes)',
      },
      {
        id: 12,
        orderId: '#SK248',
        product: 'Empty Perfum',
        image: 'product12.jpg',
        customer: 'Sophia Charlotte',
        price: 199.21,
        vendor: 'Tagus',
        date: '12-12-2022',
        status: 'Delivered',
        rating: '5.0 (15 Votes)',
      },
      {
        id: 13,
        orderId: '#SK248',
        product: 'Minimalist Podiums',
        image: 'product13.jpg',
        customer: 'Jackson Levi',
        price: 99.99,
        vendor: 'Gold',
        date: '13-12-2022',
        status: 'Delivered',
        rating: '4.0 (54 Votes)',
      },
      {
        id: 14,
        orderId: '#SK248',
        product: 'Trendy Design',
        image: 'product14.jpg',
        customer: 'Samuel Logan',
        price: 104.50,
        vendor: 'Wooden',
        date: '14-12-2022',
        status: 'Pending',
        rating: '3.0 (76 Votes)',
      },
      {
        id: 15,
        orderId: '#AB248',
        product: 'Notebook Pen',
        image: 'product15.jpg',
        customer: 'Gabriel Ezra',
        price: 333.50,
        vendor: 'Black Desk',
        date: '15-12-2022',
        status: 'Out of Stock',
        rating: '1.0 (98 Votes)',
      },

    ];

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

  public getStatusClass(type: string): string {
    return Utilities.setStatusClass(type);
  }

}
