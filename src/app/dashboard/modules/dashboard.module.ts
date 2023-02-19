import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '@dashboard/components/dashboard/dashboard.component';
import { EmployeesComponent } from '@dashboard/components/employees/employees.component';
import { CandidatesComponent } from '@dashboard/components/candidates/candidates.component';
import { WarehousComponent } from '@dashboard/components/warehous/warehous.component';
import { CalendarComponent } from '@dashboard/components/calendar/calendar.component';
import { CalendarService } from '@dashboard/services/calendar.service';
import { CandidatesService } from '@dashboard/services/candidates.service';
import { EmployeesService } from '@dashboard/services/employees.service';
import { WarehousService } from '@dashboard/services/warehous.service';
import { DashboardService } from '@dashboard/services/dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent,
    CandidatesComponent,
    WarehousComponent,
    CalendarComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [
    CalendarService,
    EmployeesService,
    WarehousService,
    DashboardService,
    CandidatesService,
  ],
})
export class DashboardModule {}
