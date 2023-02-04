import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './ui/header/header.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { TextFieldComponent } from './ui/text-input/text-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextFieldComponent, HeaderComponent, SidebarComponent],
  declarations: [TextFieldComponent, HeaderComponent, SidebarComponent],
})
export class SharedUiModule {}
