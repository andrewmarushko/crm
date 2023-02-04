import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { AuthGuard } from '@shared/services/auth/auth.guard';

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
