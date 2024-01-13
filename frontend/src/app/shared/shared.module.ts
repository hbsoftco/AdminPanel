import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const MODULES = [TranslateModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES],
})
export class SharedModule { }
