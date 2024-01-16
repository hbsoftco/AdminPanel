import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ChartModule } from 'primeng/chart';

const COMPONENTS = [TopNavComponent, SidebarComponent];
const MODULES = [ChartModule];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    // Prime NG
    TieredMenuModule,
    ButtonModule,

    MODULES,

    RouterModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    COMPONENTS,
    MODULES
  ]
})
export class ComponentsModule { }
