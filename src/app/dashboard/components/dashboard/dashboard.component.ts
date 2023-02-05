import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@dashboard/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private users: ConfigService) {}
  getUsers() {
    this.users.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
