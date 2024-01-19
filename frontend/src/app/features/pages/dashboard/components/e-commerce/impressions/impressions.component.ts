import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
  styleUrl: './impressions.component.scss'
})
export class ImpressionsComponent {
  @Input() price: string = "$12,875"
  @Input() price2: string = "$21,490"
}
