import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { NewUserComponent } from './new-user/new-user.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    NewUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
