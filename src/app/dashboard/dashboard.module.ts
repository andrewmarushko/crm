import { DashboardChildComponent } from './components/dashboard-child.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, DashboardChildComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
