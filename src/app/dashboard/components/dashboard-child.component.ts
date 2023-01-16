import { Component, Input } from '@angular/core';
import { Users } from '../dashboard.component';

@Component({
  selector: 'dashboard-child',
  template: `<div>
    Users FROM PARENT:
    <div *ngFor="let user of users">{{ user.name }} ({{ user.username }})</div>
  </div>`,
})
export class DashboardChildComponent {
  @Input()
  users: Users[] = [];
}
