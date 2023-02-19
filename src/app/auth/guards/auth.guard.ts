import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const accessToken = localStorage.getItem('accessToken');
    const companyId = localStorage.getItem('company_id');

    if (accessToken && companyId) {
      return true;
    } else {
      return this.router.createUrlTree(['/auth/verify-company']);
    }
  }
}
