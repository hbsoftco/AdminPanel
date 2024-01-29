import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReadEmailComponent } from './read-email/read-email.component';
import { ComposeComponent } from './compose/compose.component';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent,
    children: [
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'compose',
        component: ComposeComponent
      },
      {
        path: 'read-email',
        component: ReadEmailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
