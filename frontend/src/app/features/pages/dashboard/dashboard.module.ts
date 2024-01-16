import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatBoxComponent } from './components/stat-box/stat-box.component';
import { StateBoxComponent } from './components/state-box/state-box.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatBoxComponent,
    StateBoxComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
