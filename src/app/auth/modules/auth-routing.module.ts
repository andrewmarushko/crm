import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '@auth/components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '@auth/components/forgot-password/forgot-password.component';
import { SignUpComponent } from '@auth/components//sign-up/sign-up.component';
import { VerifyCompanyComponent } from '@auth/components/verify-company/verify-company.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'verify-company',
    pathMatch: 'full',
  },
  {
    path: 'verify-company',
    component: VerifyCompanyComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
