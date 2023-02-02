import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  template: ` <input [formControl]="control" /> `,
})
export class TextFieldComponent {
  @Input() control: FormControl;
}
