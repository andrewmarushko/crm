import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordShouldMatch } from './validators/password-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private fb: FormBuilder) {}

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

  onSubmitForm() {
    console.log(this.signUpForm.value);
  }
}
