import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MyDriveComponent } from './my-drive/my-drive.component';
import { AssetsComponent } from './assets/assets.component';
import { ProjectsComponent } from './projects/projects.component';
import { TemplatesComponent } from './templates/templates.component';
import { DocumentsComponent } from './documents/documents.component';
import { MediaComponent } from './media/media.component';


const routes: Routes = [
  {
    path: '', component: FileManagerComponent, children: [
      { path: '', redirectTo: 'my-drive', pathMatch: 'full' },
      { path: 'my-drive', component: MyDriveComponent },
      { path: 'assets', component: AssetsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'templates', component: TemplatesComponent },
      { path: 'documents', component: DocumentsComponent },
      { path: 'media', component: MediaComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
