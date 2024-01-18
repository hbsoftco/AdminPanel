import { Component } from '@angular/core';

@Component({
  selector: 'app-e-live-visits',
  templateUrl: './e-live-visits.component.html',
  styleUrl: './e-live-visits.component.scss'
})
export class ELiveVisitsComponent {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Domestic', 'International'],
      datasets: [
        {
          data: [43.8, 56.2],
          backgroundColor: ['#ee368c', '#20d2a9'],
          hoverBackgroundColor: ['#ee368c', '#20d2a9']
        }
      ]
    };


    this.options = {
      cutout: '60%',
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
      }
    };
  }
}
