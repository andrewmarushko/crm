import { ConfigService, UserId } from './../dashboard.service';
import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../dashboard.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-details',
  template: `<div>
    <a routerLink="/">Home</a>
    <div>User Info:</div>
    <div>Name: {{ userFromApi.name }}</div>
    <div>Username: {{ userFromApi.username }}</div>
    <div>Email: {{ userFromApi.email }}</div>
  </div>`,
})
export class UserDetailsComponent implements OnInit {
  userFromApi: Users = {
    id: 1,
    name: '',
    username: '',
    email: '',
  };
  constructor(
    private activedRoute: ActivatedRoute,
    private user: ConfigService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((res) => {
      this.user
        .getUserById(res as UserId)
        .subscribe((res) => (this.userFromApi = res));
    });
  }
}
