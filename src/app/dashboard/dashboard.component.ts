import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfigService } from './dashboard.service';

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  usersFromApi: Users[] = [];

  constructor(private users: ConfigService) {}

  getUsers() {
    this.users.getUsers().subscribe((res: any) => {
      this.usersFromApi = res;
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
