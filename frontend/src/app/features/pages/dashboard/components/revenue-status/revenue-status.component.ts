import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-revenue-status',
  templateUrl: './revenue-status.component.html',
  styleUrl: './revenue-status.component.scss'
})
export class RevenueStatusComponent {
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
    // console.log(document.documentElement);

    this.data = {
      labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan',],
      datasets: [
        {
          label: 'Income',
          data: [12, 51, 40, 33, 21, 43, 45, 53, 22, 33, 52],
          fill: true,
          tension: 0.4,
          borderSize: 4,
          borderColor: "#19a873",
          backgroundColor: "#19a87343"
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      responsive: true,
      plugins: {
        tooltip: {
          backgroundColor: "#117c63"
        },
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#a6aab3',
            font: {
              weight: 400,
              family: 'Open Sans',
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
            stepSize: 10,
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
