import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';

export const dashboardRoutes: Routes = [
  {
    path: 'invoice',
    title: 'Invoices',
    component: DashboardComponent,
  },
  {
    path: 'clients',
    title: 'Clients',
    component: ClientsComponent,
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
