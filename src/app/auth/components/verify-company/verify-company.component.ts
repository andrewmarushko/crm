import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@auth/services/auth/auth.service';
import { catchError, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-verify-company',
  templateUrl: './verify-company.component.html',
  styleUrls: ['./verify-company.component.scss'],
})
export class VerifyCompanyComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {}
  verify$: Observable<any>;
  errorMessage$: Observable<Error>;
  error: Error | null = null;

  verifyCompanyForm = this.fb.group({
    company_name: '',
  });
  onSubmitForm() {
    this.verify$ = this.authService.verifyCompany(
      this.verifyCompanyForm.value.company_name as any
    );

    this.errorMessage$ = this.verify$.pipe(
      tap({
        error: (error) => (this.error = error),
        complete: () => (this.error = null),
      }),
      catchError((error) => of(error))
    );
  }
}
