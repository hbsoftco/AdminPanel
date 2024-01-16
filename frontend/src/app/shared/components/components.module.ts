import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';

const COMPONENTS = [TopNavComponent, SidebarComponent];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    // Prime NG
    TieredMenuModule,
    ButtonModule,

    RouterModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ComponentsModule { }
