import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent,
    children: [
      {
        path: 'inbox',
        component: InboxComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
