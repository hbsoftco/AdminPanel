import { Component, Input } from '@angular/core';
import { IFileList } from '../../../../../../core/interfaces';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent {
  @Input() files: IFileList[] = []
}
