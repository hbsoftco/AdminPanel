import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sales-by-locations',
  templateUrl: './sales-by-locations.component.html',
  styleUrl: './sales-by-locations.component.scss'
})
export class SalesByLocationsComponent {
  items: MenuItem[] | undefined;
  countries: any = [
    { name: 'Canada', value: 75 },
    { name: 'Russia', value: 65 },
    { name: 'Greenland', value: 50 },
    { name: 'USA', value: 40 },
    { name: 'Japan', value: 30 },
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
