import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotificationComponent } from './layouts/components/notification/notification.component';
import { UserProfileComponent } from './layouts/components/user-profile/user-profile.component';
import { ChangeLangComponent } from './layouts/components/change-lang/change-lang.component';
import { EmailsComponent } from './layouts/components/emails/emails.component';
import { MemberGridComponent } from './member-grid/member-grid.component';
import { MemberGrid2Component } from './member-grid2/member-grid2.component';

const COMPONENTS = [
  TopNavComponent,
  SidebarComponent,
  CardComponent,
  ButtonComponent,
  FooterComponent,
  MemberGridComponent,
  MemberGrid2Component,
];

@NgModule({
  declarations: [
    COMPONENTS,
    NotificationComponent,
    UserProfileComponent,
    ChangeLangComponent,
    EmailsComponent,

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
