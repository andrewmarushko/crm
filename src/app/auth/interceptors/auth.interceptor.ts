import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { catchError, from, Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private refreshTokenAttempts = 0;
  private readonly MAX_REFRESH_TOKEN_ATTEMPTS = 3;

  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const companyId = localStorage.getItem('company_id');

    if (companyId) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
          company_id: companyId,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (this.refreshTokenAttempts < this.MAX_REFRESH_TOKEN_ATTEMPTS) {
            this.refreshTokenAttempts++;

            return this.authService.refreshToken(refreshToken!).pipe(
              switchMap((data: any) => {
                this.refreshTokenAttempts = 0;

                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);

                req = req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${data.accessToken}`,
                    company_id: companyId!,
                  },
                });

                return next.handle(req);
              }),
              catchError((error: HttpErrorResponse) =>
                this.handleRefreshTokenError(error)
              )
            );
          } else {
            return this.handleRefreshTokenError(error);
          }
        } else {
          return throwError(error);
        }
      })
    );
  }

  private handleRefreshTokenError(
    error: HttpErrorResponse
  ): Observable<HttpEvent<any>> {
    this.refreshTokenAttempts = 0;

    return from(this.router.navigate(['/auth/verify-company'])).pipe(
      switchMap(() => throwError(error))
    );
  }
}
