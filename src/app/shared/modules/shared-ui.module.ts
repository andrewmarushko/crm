import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';
import { AuthService } from '@auth/services/auth/auth.service';
import { ErrorRequestHandleService } from '@shared/services/error-handling.service';
import { UserService } from '../services/user.service';
// import { AuthService } from './services/auth/auth.service';
import { HeaderComponent } from '../ui/header/header.component';
import { NavigationComponent } from '../ui/nav/navigation.component';
import { SidebarComponent } from '../ui/sidebar/sidebar.component';
import { TextFieldComponent } from '../ui/text-input/text-input.component';

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
  providers: [AuthService, UserService, AuthGuard, ErrorRequestHandleService],
})
export class SharedUiModule {}
