import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email/email.component';
import { SharedModule } from '../../../shared/shared.module';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { ReadEmailComponent } from './read-email/read-email.component';


@NgModule({
  declarations: [
    EmailComponent,
    InboxComponent,
    ComposeComponent,
    ReadEmailComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule
  ]
})
export class EmailModule { }
