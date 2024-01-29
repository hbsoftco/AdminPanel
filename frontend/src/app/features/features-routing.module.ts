import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/eCommerce',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
    ]
  },
  {
    path: 'apps',
    component: BaseComponent,
    loadChildren: () =>
      import('./pages/apps/apps.module').then(
        (m) => m.AppsModule
      ),
  },
  {
    path: 'to-do-list',
    component: BaseComponent,
    loadChildren: () =>
      import('./pages/todo-list/todo-list.module').then(
        (m) => m.TodoListModule
      ),
  },
  {
    path: 'email',
    component: BaseComponent,
    loadChildren: () =>
      import('./pages/email/email.module').then(
        (m) => m.EmailModule
      ),
  },
  {
    path: 'chat',
    component: BaseComponent,
    loadChildren: () =>
      import('./pages/chat/chat.module').then(
        (m) => m.ChatModule
      ),
  },
  {
    path: 'contact',
    component: BaseComponent,
    loadChildren: () =>
      import('./pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  // {
  //   path: 'calendar',
  //   component: BaseComponent,
  //   loadChildren: () =>
  //     import('./pages/app-calendar/app-calendar.module').then(
  //       (m) => m.AppCalendarModule
  //     ),
  // },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
