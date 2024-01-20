import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-e-state-box',
  templateUrl: './e-state-box.component.html',
  styleUrl: './e-state-box.component.scss'
})
export class EStateBoxComponent {
  @Input() price: string = ""
  @Input() value: string = ""
  @Input() percentage: string = ""
  @Input() icon: string = ""
  @Input() state: boolean = true

  hoveredIcon: string = 's';

  changeIcon(iconType: string): void {
    this.hoveredIcon = iconType;
  }
}
