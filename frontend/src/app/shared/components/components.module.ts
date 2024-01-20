import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

const COMPONENTS = [TopNavComponent, SidebarComponent, CardComponent, ButtonComponent];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    NgPrimeModule,
    RouterModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    COMPONENTS,
  ]
})
export class ComponentsModule { }
