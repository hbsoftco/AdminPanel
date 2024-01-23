import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { MyDriveComponent } from './components/my-drive/my-drive.component';
import { AssetsComponent } from './components/assets/assets.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PersonalComponent } from './components/personal/personal.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    MyDriveComponent,
    AssetsComponent,
    ProjectsComponent,
    PersonalComponent,
    FileManagerComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FileManagerRoutingModule
  ]
})
export class FileManagerModule { }
