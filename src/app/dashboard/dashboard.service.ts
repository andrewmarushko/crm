import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserId {
  userId: string;
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById({ userId }: UserId) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
