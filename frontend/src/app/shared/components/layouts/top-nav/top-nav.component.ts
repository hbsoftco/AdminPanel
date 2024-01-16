import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'English',
        icon: 'pi pi-search'
      },
      {
        label: 'Spanish',
        icon: 'pi pi-search'
      },
      {
        label: 'German',
        icon: 'pi pi-search'
      },
    ]
  }

}
