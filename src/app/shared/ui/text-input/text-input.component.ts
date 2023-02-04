import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextFieldComponent {
  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() type: string;
  @Input() id: string;
}
