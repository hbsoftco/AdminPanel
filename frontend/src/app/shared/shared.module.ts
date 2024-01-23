import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from './components/components.module';
import { NgPrimeModule } from './ng-prime/ng-prime.module';
import { FormsModule } from '@angular/forms';

const MODULES = [TranslateModule, ComponentsModule, NgPrimeModule, FormsModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES],
})
export class SharedModule { }
