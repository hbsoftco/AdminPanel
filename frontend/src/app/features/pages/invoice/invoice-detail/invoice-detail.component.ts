import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.scss'
})
export class InvoiceDetailComponent {
  products: any[] = []

  ngOnInit() {
    this.products = [
      {
        id: '01.',
        product: 'Laptop Mac Pro',
        image: 'product1.jpg',
        price: "$2400",
        unitPrice: '$400',
        quantity: 6,
      },
      {
        id: '02.',
        product: 'Smart Camera XD6',
        image: 'product2.jpg',
        price: "$600",
        unitPrice: '$200',
        quantity: 3,
      },
      {
        id: '03.',
        product: 'Pixi 8 Wireless Airphone',
        image: 'product3.jpg',
        price: '$1000',
        unitPrice: '$1000',
        quantity: 1,
      },
    ];

  }
}
