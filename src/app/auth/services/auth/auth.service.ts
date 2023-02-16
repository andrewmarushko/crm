import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateUserRequestInterface } from '@auth/types/auth.interface';
import { AuthRequestInterface } from '@auth/types/auth.interface';
import { getCookie } from '@helpers/cookies.helper';
import {
  CurrentUserInterface,
  initialState,
} from '@shared/services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  private error = new BehaviorSubject<ErrorResponseInterface | null>(null);
  private user = new BehaviorSubject<CurrentUserInterface | null | undefined>(
    initialState
  );

  user$: Observable<any> = this.user.asObservable();
  errorMessage$: Observable<ErrorResponseInterface | null> =
    this.error.asObservable();

  signIn(
    credentials: AuthRequestInterface
  ): Observable<CurrentUserInterface | null | undefined> {
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
          this.user.next(user);
          return user;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('error', error.error);
          this.error.next(error.error);
          return of(null);
        })
      );
  }

  signOut() {}

  register(
    newUserData: CreateUserRequestInterface
  ): Observable<ErrorResponseInterface> {
    return this.httpClient
      .post<CreateUserRequestInterface>(
        `${environment.baseUrl}/authentication/registration`,
        newUserData
      )
      .pipe(
        map(() => {
          this.router.navigate(['/auth/sign-in']);
          return of(null);
        }),
        catchError((error) => {
          this.error.next(error.error);
          return of(error.error);
        })
      );
  }

  resetPassword() {}

  refreshToken() {}
}

export interface ErrorResponseInterface {
  statusCode: number | null;
  message: string;
}
