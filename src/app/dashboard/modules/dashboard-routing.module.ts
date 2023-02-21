import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@dashboard/components/dashboard/dashboard.component';
import { AuthGuard } from '@auth/guards/auth.guard';
import { EmployeesComponent } from '@dashboard/components/employees/employees.component';
import { CandidatesComponent } from '@dashboard/components/candidates/candidates.component';
import { CalendarComponent } from '@dashboard/components/calendar/calendar.component';
import { WarehousComponent } from '@dashboard/components/warehous/warehous.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employees',
    title: 'Employees',
    component: EmployeesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'candidates',
    title: 'Candidates',
    component: CandidatesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'calendar',
    title: 'Calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'warehous',
    title: 'Warehous',
    component: WarehousComponent,
    canActivate: [AuthGuard],
  },
];

const routes: Routes = [...dashboardRoutes];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
