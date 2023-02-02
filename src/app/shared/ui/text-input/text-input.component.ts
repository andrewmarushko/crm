import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  template: ` <input class="input" [formControl]="control" /> `,
  styleUrls: ['./text-input.component.scss'],
})
export class TextFieldComponent {
  @Input() control: FormControl;
}
