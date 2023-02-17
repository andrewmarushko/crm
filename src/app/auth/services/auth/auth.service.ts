import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '@env/environment';
import { throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
        catchError(() => {
          localStorage.setItem('company_id', 'null');
          return throwError(() => new Error('company id not found'));
        })
      )
      .subscribe();
  }

  signIn(formData: LoginRequest) {
    return this.http
      .post<LoginRequest>(`${environment.baseUrl}/auth/login`, formData)
      .pipe(
        tap((res: any) => {
          console.log(res);
          const accessToken = res.accessToken;
          const refreshToken = res.refreshToken;
          const user = res.user;

          if (accessToken && refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/invoice']);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError(() => error);
        })
      )
      .subscribe();
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
