import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'new', component: NewUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
