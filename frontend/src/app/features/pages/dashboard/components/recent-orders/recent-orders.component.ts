import { Component } from '@angular/core';
import { Table } from 'primeng/table';
// import { Customer, Representative } from '../../domain/customer';
// import { CustomerService } from '../../service/customerservice';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss'
})
export class RecentOrdersComponent {
  products: any = []


  ngOnInit() {
    this.products = [
      {
        id: '1000',
        code: '#PN323',
        name: 'Bamboo Watch',
        customer: 'Jackson Levi',
        image: 'bamboo-watch.jpg',
        price: 65.00,
        category: 'Accessories',
        quantity: 24,
        status: 'pending',
        statusText: 'Pending',
        date: '14-12-2022',
        rating: "4.0 (10 Votes)"
      },
      {
        id: '1000',
        code: '#PN323',
        name: 'Black Watch',
        customer: 'Sophia Charlotte',
        image: 'black-watch.jpg',
        price: 65.00,
        category: 'Accessories',
        quantity: 24,
        status: 'active',
        statusText: 'Delivered',
        date: '14-12-2022',
        rating: "4.0 (10 Votes)"
      },
      {
        id: '1000',
        code: '#PN323',
        name: 'Blue Band',
        customer: 'Gabriel Ezra	',
        image: 'bracelet.jpg',
        price: 65.00,
        category: 'Accessories',
        quantity: 24,
        status: 'inactive',
        statusText: 'Out of Stock',
        date: '14-12-2022',
        rating: "4.0 (10 Votes)"
      },
    ];
  }

}
