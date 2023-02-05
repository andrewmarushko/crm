import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '@shared/services/user.service';
import {
  AuthResponseInterface,
  CreateUserRequestInterface,
} from '@auth/types/auth.interface';
import { AuthRequestInterface } from '@auth/types/auth.interface';
import { getCookie } from '@helpers/cookies.helper';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  private error = new BehaviorSubject<ErrorResponseInterface>({
    statusCode: null,
    message: '',
  });
  errorMessage$: Observable<ErrorResponseInterface> = this.error.asObservable();

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
  register(newUserData: CreateUserRequestInterface) {
    return this.httpClient
      .post<CreateUserRequestInterface>(
        `${environment.baseUrl}/authentication/registration`,
        newUserData
      )
      .pipe(
        map(() => {
          this.router.navigate(['/auth/sign-in']);
          return;
        }),
        catchError((error: HttpErrorResponse) => {
          this.error.next(error.error as any);
          console.log(error);
          return throwError('');
        })
      )
      .subscribe();
  }
  resetPassword() {}
  refreshToken() {}
}

export interface ErrorResponseInterface {
  statusCode: number | null;
  message: string;
}
