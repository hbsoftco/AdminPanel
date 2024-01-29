import { Component, Input } from '@angular/core';
import { IMember } from '../../../core/interfaces';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-member-grid2',
  templateUrl: './member-grid2.component.html',
  styleUrl: './member-grid2.component.scss'
})
export class MemberGrid2Component {
  items: MenuItem[] | undefined;
  @Input() member: IMember | undefined

  ngOnInit() {
    this.items = [
      {
        label: 'Add',
        icon: 'pi pi-plus-circle'
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash'
      },
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
    ]
  }
}
