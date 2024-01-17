import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

const MODULES = [
  ChartModule,
  TableModule,
  TieredMenuModule,
  ButtonModule,
  DropdownModule,
  ProgressBarModule,
  TagModule,
  InputTextModule,
  RippleModule
];

@NgModule({
  declarations: [],
  imports: [
    MODULES,
    CommonModule
  ],
  exports: [
    MODULES,
  ]
})
export class NgPrimeModule { }
