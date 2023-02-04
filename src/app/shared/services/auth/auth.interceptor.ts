import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.cookieService.get('Authentication');

    if (accessToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `${accessToken}`,
        },
      });
    }

    return next.handle(req).pipe();
  }
}
