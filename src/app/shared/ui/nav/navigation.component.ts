import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { dashboardRoutes } from '@dashboard/modules/dashboard-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  routes: Routes;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.routes = dashboardRoutes;
  }
}
