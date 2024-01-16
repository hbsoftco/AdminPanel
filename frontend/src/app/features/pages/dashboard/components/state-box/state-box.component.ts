import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-state-box',
  templateUrl: './state-box.component.html',
  styleUrl: './state-box.component.scss'
})
export class StateBoxComponent {
  @Input() title: string = ""
  @Input() value: string = ""
  @Input() percentage: string = ""
  @Input() icon: string = ""
  @Input() state: boolean = true

}
