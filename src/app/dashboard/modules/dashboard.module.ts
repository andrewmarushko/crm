import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '@dashboard/components/dashboard/dashboard.component';
import { EmployeesComponent } from '@dashboard/components/employees/employee.component';
import { CandidatesComponent } from '@dashboard/components/candidates/candidates.component';
import { WarehousComponent } from '@dashboard/components/warehous/warehous.component';
import { CalendarComponent } from '@dashboard/components/calendar/calendar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent,
    CandidatesComponent,
    WarehousComponent,
    CalendarComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
