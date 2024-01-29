import { Component, Input } from '@angular/core';
import { IMember } from '../../../core/interfaces';

@Component({
  selector: 'app-member-grid',
  templateUrl: './member-grid.component.html',
  styleUrl: './member-grid.component.scss'
})
export class MemberGridComponent {
  @Input() member: IMember | undefined
}
