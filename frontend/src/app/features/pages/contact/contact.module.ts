import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MembersGridComponent } from './members-grid/members-grid.component';
import { MembersGrid2Component } from './members-grid-2/members-grid-2.component';
import { MembersListComponent } from './members-list/members-list.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    MembersGridComponent,
    MembersGrid2Component,
    MembersListComponent,
    MemberProfileComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
