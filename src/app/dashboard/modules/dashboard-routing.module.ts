import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@dashboard/components/dashboard/dashboard.component';
import { ClientsComponent } from '@dashboard/components/clients/clients.component';
import { AuthGuard } from '@auth/guards/auth.guard';

export const dashboardRoutes: Routes = [
  {
    path: 'invoice',
    title: 'Invoices',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clients',
    title: 'Clients',
    component: ClientsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'invoice2',
    title: 'Invoices',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clients3',
    title: 'Clients',
    component: ClientsComponent,
    canActivate: [AuthGuard],
  },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full',
  },
  ...dashboardRoutes,
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
