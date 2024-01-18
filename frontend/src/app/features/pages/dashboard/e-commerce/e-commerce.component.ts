import { Component } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.scss'
})
export class ECommerceComponent {
  data: any = [
    {
      price: '$25,890',
      icon: '',
      state: true,
      percentage: '1.3%',
    },
    {
      price: '$100.5M',
      icon: '',
      state: true,
      percentage: '0.5%',
    },
    {
      price: '50.5M',
      icon: '',
      state: false,
      percentage: '1%',
    },
  ]
}
