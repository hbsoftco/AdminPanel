import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StateBoxComponent } from './components/state-box/state-box.component';
import { ProductSalesChartComponent } from './components/product-sales-chart/product-sales-chart.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { LmsComponent } from './lms/lms.component';
import { CryptoComponent } from './crypto/crypto.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { SaasAppComponent } from './saas-app/saas-app.component';
import { EStateBoxComponent } from './components/e-commerce/e-state-box/e-state-box.component';
import { ERatingBoxComponent } from './components/e-commerce/e-rating-box/e-rating-box.component';
import { AudienceOverviewComponent } from './components/e-commerce/audience-overview/audience-overview.component';
import { ELiveVisitsComponent } from './components/e-commerce/e-live-visits/e-live-visits.component';
import { EVisitByDayComponent } from './components/e-commerce/e-visit-by-day/e-visit-by-day.component';
import { ImpressionsComponent } from './components/e-commerce/impressions/impressions.component';
import { ActivityTimelineComponent } from './components/activity-timeline/activity-timeline.component';
import { SalesByLocationsComponent } from './components/e-commerce/sales-by-locations/sales-by-locations.component';
import { RevenueStatusComponent } from './components/revenue-status/revenue-status.component';
import { NewCustomersComponent } from './components/e-commerce/new-customers/new-customers.component';
import { RecentOrdersComponent } from './components/e-commerce/recent-orders/recent-orders.component';
import { TeamMembersListComponent } from './components/e-commerce/team-members-list/team-members-list.component';
import { BestSellingProductsComponent } from './components/e-commerce/best-selling-products/best-selling-products.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StateBoxComponent,
    ProductSalesChartComponent,
    RecentOrdersComponent,
    ECommerceComponent,
    AnalyticsComponent,
    ProjectManagementComponent,
    LmsComponent,
    CryptoComponent,
    HelpDeskComponent,
    SaasAppComponent,
    EStateBoxComponent,
    ERatingBoxComponent,
    AudienceOverviewComponent,
    ELiveVisitsComponent,
    EVisitByDayComponent,
    ImpressionsComponent,
    ActivityTimelineComponent,
    SalesByLocationsComponent,
    RevenueStatusComponent,
    NewCustomersComponent,
    TeamMembersListComponent,
    BestSellingProductsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
