import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { MyDriveComponent } from './my-drive/my-drive.component';
import { AssetsComponent } from './assets/assets.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalComponent } from './components/personal/personal.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FolderBoxComponent } from './components/folder-box/folder-box.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileBoxComponent } from './components/file-box/file-box.component';
import { TemplatesComponent } from './templates/templates.component';


@NgModule({
  declarations: [
    MyDriveComponent,
    AssetsComponent,
    ProjectsComponent,
    PersonalComponent,
    FileManagerComponent,
    FolderBoxComponent,
    FileListComponent,
    FileBoxComponent,
    TemplatesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FileManagerRoutingModule
  ]
})
export class FileManagerModule { }
