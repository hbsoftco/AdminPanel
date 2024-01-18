import { Component } from '@angular/core';

@Component({
  selector: 'app-audience-overview',
  templateUrl: './audience-overview.component.html',
  styleUrl: './audience-overview.component.scss'
})
export class AudienceOverviewComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      datasets: [
        {
          label: 'Orders',
          barThickness: 10,
          maxBarThickness: 6,
          barPercentage: 0.3,
          backgroundColor: '#117c63',
          borderColor: '#117c63',
          data: [25, 10, 10, 15, 28, 25, 20, 23, 30],
          borderRadius: 6,
        },
        {
          label: 'Net Revenue',
          barThickness: 10,
          maxBarThickness: 6,
          barPercentage: 0.3,
          backgroundColor: '#a7edda',
          borderColor: '#a7edda',
          data: [18, 14, 25, 12, 20, 15, 10, 8, 25],
          borderRadius: 6,
        },
        {
          label: 'Refunds',
          barThickness: 10,
          maxBarThickness: 6,
          barPercentage: 0.3,
          backgroundColor: '#ee368c',
          borderColor: '#ee368c',
          data: [22, 20, 10, 18, 8, 16, 5, 15, 20],
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
