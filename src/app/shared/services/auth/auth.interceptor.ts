import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access');

    if (accessToken) {
      req = req.clone({
        withCredentials: true,
        setHeaders: {
          Authorization: `${accessToken}`,
        },
      });
    }

    return next
      .handle(req)
      .pipe
      // catchError((error) => {
      //   if (error.status === 401) {
      //     const refresh = localStorage.getItem('refresh');

      //   }
      // })
      ();
  }
}
