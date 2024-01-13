import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

const COMPONENTS = [TopNavComponent, SidebarComponent];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ComponentsModule { }
