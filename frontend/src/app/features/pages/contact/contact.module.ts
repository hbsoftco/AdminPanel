import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MembersGridComponent } from './members-grid/members-grid.component';
import { MembersGrid2Component } from './members-grid-2/members-grid-2.component';
import { MembersListComponent } from './members-list/members-list.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { SharedModule } from '../../../shared/shared.module';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { ActivityTimelineComponent } from './components/activity-timeline/activity-timeline.component';
import { StateComponent } from './components/state/state.component';


@NgModule({
  declarations: [
    MembersGridComponent,
    MembersGrid2Component,
    MembersListComponent,
    MemberProfileComponent,
    PersonalInformationComponent,
    OverviewComponent,
    MyTasksComponent,
    ActivityTimelineComponent,
    StateComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
