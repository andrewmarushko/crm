import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth/auth.service';
import { catchError, Observable, of, tap } from 'rxjs';
import { CurrentUserInterface } from '@shared/interfaces/user.interface';
import { LoginRequest } from '@auth/types/auth.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  error: Error | null = null;
  currentUser$: Observable<CurrentUserInterface>;
  errorMessage$: Observable<Error>;

  signInForm = this.fb.group({
    corporate_email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  onSubmitForm() {
    this.currentUser$ = this.authService.signIn(
      this.signInForm.value as LoginRequest
    );

    this.errorMessage$ = this.currentUser$.pipe(
      tap({
        error: (err) => (this.error = err),
        complete: () => (this.error = null),
      }),
      catchError((error) => of(error))
    );
  }

  ngOnInit(): void {}
}
