import { Component } from '@angular/core';

@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
  styleUrl: './product-sales-chart.component.scss'
})
export class ProductSalesChartComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Gross margin',
          backgroundColor: '#19a873',
          borderColor: '#19a873',
          data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 88],
          borderRadius: 6,
        },
        {
          label: 'Revenue',
          backgroundColor: '#718980',
          borderColor: '#718980',
          data: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 59],
          borderRadius: 6,
        },
        {
          label: 'Cost',
          backgroundColor: '#117c63',
          borderColor: '#117c63',
          data: [68, 33, 50, 39, 46, 77, 10, 68, 33, 50, 39, 22],
          borderRadius: 6,
        },
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          displayColors: false,
          yAlign: 'bottom',
          backgroundColor: '#227799'
        },
        legend: {
          labels: {
            color: textColor
          }
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }

      }
    };
  }

}
