import { Component } from '@angular/core';

@Component({
  selector: 'app-e-rating-box',
  templateUrl: './e-rating-box.component.html',
  styleUrl: './e-rating-box.component.scss'
})
export class ERatingBoxComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      datasets: [
        {
          data: [11, 9, 7, 8, 10],
          backgroundColor: ["#4ddbb9", "#20d2a9", "#19a873", "#20d2a9", "#117c63"],
          label: 'Rate',
          borderRadius: 6,
          borderWidth: 1
        }
      ],
      labels: ['Rating1', 'Rating2', 'Rating3', 'Rating4', 'Rating5']
    };

    this.options = {
      plugins: {
        tooltip: {
          backgroundColor: "#117c63"
        },
        legend: {
          display: false
        }
      },
      scales: {
        r: {
          ticks: {
            display: false
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
}
