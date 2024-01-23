import { Component, Input } from '@angular/core';
import { IFileBox } from '../../../../../../core/interfaces';

@Component({
  selector: 'app-file-box',
  templateUrl: './file-box.component.html',
  styleUrl: './file-box.component.scss'
})
export class FileBoxComponent {
  @Input() fileBox: IFileBox | undefined;
}
