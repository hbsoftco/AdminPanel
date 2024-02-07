import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-best-selling-products',
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.scss'
})
export class BestSellingProductsComponent {
  items: MenuItem[] | undefined;
  products: any[] = []

  ngOnInit() {
    this.products = [
      {
        id: 'A3652',
        product: 'hbsoft Airpod x-Zon',
        image: 'product8.jpg',
        price: 289.50,
        count: '450 (550)',
        type: 'Stock',
      },
      {
        id: 'A3651',
        product: 'Smart Watch F8 Pro',
        image: 'product5.jpg',
        price: 289.50,
        count: '10 (1000)',
        type: 'Stock',
      },
      {
        id: 'A3658',
        product: 'Nord Fold ZL',
        image: 'product16.jpg',
        price: 289.50,
        count: '543 (600)',
        type: 'Stock',
      },
      {
        id: 'A3657',
        product: 'Wall Clock Cimbina',
        image: 'product6.jpg',
        price: 289.50,
        count: '99 (199)',
        type: 'Stock',
      },
      {
        id: 'A3655',
        product: 'Galaxo T6 Munsun',
        image: 'product7.jpg',
        price: 289.50,
        count: '300 (321)',
        type: 'Stock',
      },
    ]

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
