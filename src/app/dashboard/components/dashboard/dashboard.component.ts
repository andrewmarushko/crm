import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth/auth.service';
import { ConfigService } from '@dashboard/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private users: ConfigService, private authService: AuthService) {}
  user = {
    corporate_email: '',
  };
  getUsers() {
    this.user = this.users.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
