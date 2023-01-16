import { Component, Input } from '@angular/core';
import { Users } from '../dashboard.component';

@Component({
  selector: 'dashboard-child',
  template: `<div>
    Users FROM PARENT:
    <div *ngFor="let user of users">
      <a routerLink="{{ user.id }}">{{ user.name }} ({{ user.username }})</a>
    </div>
  </div>`,
})
export class DashboardChildComponent {
  @Input()
  users: Users[] = [];
}
