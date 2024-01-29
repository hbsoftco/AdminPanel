import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() label: string = ""
  @Input() icon: string = ""
  @Input() disabled: boolean = false
  @Input() severity: string = ""
  @Input() rounded: boolean = false

  ngOnInit() {

  }

  handleClass() {
    let finalClass = "";

    if (!this.icon) {

      if (this.severity === "Primary" || this.severity === "") {
        finalClass += "primary-btn"
      }

      if (this.severity === "secondary") {
        finalClass += "secondary-btn"
      }
    }

    if (this.icon && this.rounded) {
      finalClass += " primary-btn-icon-rounded"
    }

    if (this.icon && this.severity === "") {
      finalClass += " btn-icon-semi-rounded"
    }

    return finalClass;
  }
}
