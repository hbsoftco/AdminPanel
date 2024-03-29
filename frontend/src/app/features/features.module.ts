import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';

import { SharedModule } from '../shared/shared.module';

import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    BaseComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
