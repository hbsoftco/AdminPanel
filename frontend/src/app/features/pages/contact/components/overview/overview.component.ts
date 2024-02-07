import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  items: MenuItem[] | undefined;
  data: any;
  options: any;

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
    
    this.data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      datasets: [
        {
          label: 'Orders',
          barThickness: 15,
          maxBarThickness: 12,
          barPercentage: 0.3,
          backgroundColor: '#117c63',
          borderColor: '#117c63',
          data: [25, 10, 10, 15, 28, 25, 20, 23, 30],
          borderRadius: 6,
        },
      ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltip: {
          backgroundColor: "#117c63"
        },
        legend: {
          display: false,
          align: 'center',
          borderRadius: 6,
          maxHeight: 130,
          labels: {
            color: '#002a0e',
            font: {
              weight: 500,
              family: 'Raleway',
              size: 14
            }
          }
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#a6aab3',
            font: {
              weight: 400,
              family: 'Raleway',
              size: 14
            }
          },
          grid: {
            display: false,
            drawBorder: true,
          }
        },
        y: {
          ticks: {
            color: '#a6aab3',
            font: {
              weight: 400,
              family: 'Open Sans',
              size: 14
            }
          },
          border: {
            dash: [2, 4],
          },
          grid: {
            color: '#cdcdcd',
            drawBorder: false
          }
        }

      }
    };
  }
}
