import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from '@layouts/auth-layout/components/auth-layout.component';
import { DashboardLayoutComponent } from '@layouts/dashboard-layout/components/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('@dashboard/modules/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@auth/modules/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
