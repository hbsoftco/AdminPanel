import { Component } from '@angular/core';

@Component({
  selector: 'app-e-visit-by-day',
  templateUrl: './e-visit-by-day.component.html',
  styleUrl: './e-visit-by-day.component.scss'
})
export class EVisitByDayComponent {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Products',
          borderColor: '#20d2a9',
          backgroundColor: '#20d2a936',
          borderSize: 1,
          data: [1, 2.6, 1.5, 3.2, 3, 1, 3],
        },
        {
          label: 'Total Views',
          borderColor: '#ee368c',
          backgroundColor: '#ee368c38',
          borderSize: 1,
          data: [2.5, 0.7, 3, 1.6, 2, 4, 1],
        }
      ]
    };

    this.options = {
      plugins: {
        tooltip: {
          backgroundColor: "#117c63"
        },
        legend: {
          position: 'bottom',
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
        r: {
          min: 0,
          max: 4,
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            display: false,
          },
          grid: {
            color: '#cdcdcd'
          },
          pointLabels: {
            color: '#afb3bb',
            font: {
              weight: 500,
              family: 'Raleway',
              size: 14
            }
          }
        }
      }
    };
  }
}
