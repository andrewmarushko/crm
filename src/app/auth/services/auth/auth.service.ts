import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '@env/environment';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  verifyCompany(company_name: VerifyCompanyRequest) {
    return this.http
      .post<VerifyCompanyResponse>(`${environment.baseUrl}/company/validate`, {
        company_name,
      })
      .pipe(
        tap((response) => {
          const company_id = response.company_id;
          if (company_id) {
            localStorage.setItem('company_id', company_id);
            this.router.navigate(['/auth/sign-in']);
          }
        }),
        catchError((err) => {
          localStorage.setItem('company_id', 'null');
          return throwError(() => err.error.message);
        })
      );
  }

  signIn(formData: LoginRequest) {
    return this.http
      .post<LoginRequest>(`${environment.baseUrl}/auth/login`, formData)
      .pipe(
        tap((res: any) => {
          const user = res.user;
          const accessToken = res.accessToken;
          const refreshToken = res.refreshToken;

          if (accessToken && refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/invoice']);
          }
        }),
        catchError((err) => {
          console.info('error from auth service', err);
          return throwError(() => err.error.message);
        })
      );
  }

  signOut() {}

  signUp() {}

  resetPassword() {}

  refreshToken() {}
}

export interface LoginRequest {
  corporate_email: string;
  password: string;
}

export interface VerifyCompanyRequest {
  company_name: string;
}
interface VerifyCompanyResponse {
  id: number;
  company_id: string;
  status: boolean;
  company_name: string;
}

// TODO add missing and move interfaces
