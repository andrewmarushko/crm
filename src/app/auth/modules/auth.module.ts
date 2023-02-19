import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from '@auth/components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '@auth/components/forgot-password/forgot-password.component';
import { SignUpComponent } from '@auth/components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@shared/modules/shared-ui.module';
import { AuthRoutingModule } from './auth-routing.module';
import { VerifyCompanyComponent } from '@auth/components/verify-company/verify-company.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyCompanyComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedUiModule,
  ],
})
export class AuthModule {}
