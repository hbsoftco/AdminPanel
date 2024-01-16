import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StateBoxComponent } from './components/state-box/state-box.component';
import { ProductSalesChartComponent } from './components/product-sales-chart/product-sales-chart.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    StateBoxComponent,
    ProductSalesChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
