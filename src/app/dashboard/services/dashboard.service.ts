import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  constructor() {}

  getUsers(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }
}
