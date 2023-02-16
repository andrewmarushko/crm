import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth/auth.service';
import { AuthRequestInterface } from '@auth/types/auth.interface';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from '@shared/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  errorMessage$: Observable<any>;
  currentUser$: Observable<CurrentUserInterface | null | undefined>;

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  onSubmitForm() {
    this.currentUser$ = this.authService.signIn(
      this.signInForm.value as AuthRequestInterface
    );
  }

  ngOnInit(): void {
    this.errorMessage$ = this.authService.errorMessage$.pipe(
      map((error) => error)
    );

    this.currentUser$ = this.authService.user$;
  }
}
