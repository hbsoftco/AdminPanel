import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrl: './change-lang.component.scss'
})
export class ChangeLangComponent {
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
