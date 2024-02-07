import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {
  @Input() value: string = ""
  @Input() title: string = ""
  @Input() icon: string = ""

  hoveredIcon: string = 's';

  changeIcon(iconType: string): void {
    this.hoveredIcon = iconType;
  }
}
