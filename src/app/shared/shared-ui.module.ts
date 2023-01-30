import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from './ui/text-input/text-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextFieldComponent],
  declarations: [TextFieldComponent],
})
export class SharedUiModule {}
