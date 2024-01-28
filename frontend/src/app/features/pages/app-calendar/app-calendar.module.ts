import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppCalendarRoutingModule } from './app-calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AppCalendarRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class AppCalendarModule { }
