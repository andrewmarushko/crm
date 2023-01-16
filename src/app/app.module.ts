import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ConfigService } from './dashboard/dashboard.service';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, DashboardLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardRoutingModule],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
