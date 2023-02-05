import { DashboardRoutingModule } from './dashboard/modules/dashboard-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from '@layouts/auth-layout/components/auth-layout.component';
import { DashboardLayoutComponent } from '@layouts/dashboard-layout/components/dashboard-layout.component';
import { ConfigService } from './dashboard/services/dashboard.service';
import { SharedUiModule } from '@shared/modules/shared-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@auth/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, DashboardLayoutComponent],
  imports: [
    SharedUiModule,
    BrowserModule,
    AppRoutingModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ConfigService,
    AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
