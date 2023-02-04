import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';

@Injectable()
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  signIn() {
    return this.httpClient
      .get<any>('http://localhost:3000/invoices/getallinvoices')
      .pipe(
        map((user) => {
          this.userService.setUser(user);
        })
      );
  }
  signOut() {}
  register() {}
  resetPassword() {}
  refreshToken() {}
}
