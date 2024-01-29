import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersGridComponent } from './members-grid/members-grid.component';
import { MembersGrid2Component } from './members-grid-2/members-grid-2.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MembersListComponent } from './members-list/members-list.component';

const routes: Routes = [
  { path: 'members-grid', component: MembersGridComponent },
  { path: 'members-grid-2', component: MembersGrid2Component },
  { path: 'members-list', component: MembersListComponent },
  { path: 'member-profile', component: MemberProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
