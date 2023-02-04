import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';

@NgModule({
  declarations: [DashboardComponent, ClientsComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
