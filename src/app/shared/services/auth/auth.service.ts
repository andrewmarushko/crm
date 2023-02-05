import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../user.service';

export function getCookie(cookieName: any) {
  let cookie: any = {};
  document.cookie.split(';').forEach(function (el) {
    let [key, value] = el.split('=');
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  signIn(credentials: AuthRequestInterface) {
    return this.httpClient
      .post<AuthRequestInterface>(
        `${environment.baseUrl}/authentication/login`,
        credentials,
        { withCredentials: true }
      )
      .pipe(
        map((user: any) => {
          localStorage.setItem('access', getCookie('Authentication'));
          localStorage.setItem('refresh', getCookie('Refresh'));

          return this.userService.setCurrentUser(user as AuthResponseInterface);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error(
              `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`
            );
          }
          return throwError('Something bad happened; please try again later.');
        })
      );
  }
  signOut() {}
  register() {}
  resetPassword() {}
  refreshToken() {}
}

export interface AuthRequestInterface {
  email: string;
  password: string;
}

interface AuthResponseInterface {
  id: number;
  description?: any;
  isArchived: boolean;
  createDateTime: Date;
  lastChangedDateTime: Date;
  name?: any;
  second_name?: any;
  avatar_url?: any;
  organization_id: string;
  password: string;
  phone?: any;
  email: string;
  currentHashedRefreshToken?: any;
  restorePasswordToken?: any;
  role: string;
  organization: {
    id: number;
    description?: any;
    isArchived: boolean;
    createDateTime: Date;
    lastChangedDateTime: Date;
    company_name: string;
    wallet_id?: any;
    wallet_secret_id?: any;
    organization_id: string;
  };
}
