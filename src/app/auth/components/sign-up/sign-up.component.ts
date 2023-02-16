import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordShouldMatch } from './validators/password-match.validator';
import {
  AuthService,
  ErrorResponseInterface,
} from '@auth/services/auth/auth.service';
import { CreateUserRequestInterface } from '@auth/types/auth.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  errorMessage$: Observable<ErrorResponseInterface | null>;

  signUpForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    second_name: ['', [Validators.required, Validators.minLength(3)]],
    company_name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirm_password: '',
      },
      { validators: passwordShouldMatch }
    ),
  });

  ngOnInit(): void {
    this.errorMessage$ = this.authService.errorMessage$.pipe(
      map((error) => error)
    );
  }

  onSubmitForm() {
    this.errorMessage$ = this.authService.register({
      name: this.signUpForm.value.name,
      second_name: this.signUpForm.value.second_name,
      email: this.signUpForm.value.email,
      company_name: this.signUpForm.value.company_name,
      password: this.signUpForm.value.password?.password,
    } as CreateUserRequestInterface);
  }
}
