import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordShouldMatch } from './match-pass.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    surname: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    company: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    email: ['', [Validators.email, Validators.required]],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(3)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
      },
      { validators: passwordShouldMatch }
    ),
  });
}
