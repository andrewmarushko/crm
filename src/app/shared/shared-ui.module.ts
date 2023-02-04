import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { NavigationComponent } from './ui/nav/navigation.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { TextFieldComponent } from './ui/text-input/text-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    TextFieldComponent,
    HeaderComponent,
    SidebarComponent,
    NavigationComponent,
  ],
  declarations: [
    TextFieldComponent,
    HeaderComponent,
    SidebarComponent,
    NavigationComponent,
  ],
})
export class SharedUiModule {}
