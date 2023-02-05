import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {
  AuthRequestInterface,
  AuthService,
} from '@shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  onSubmitForm() {
    this.authService
      .signIn(this.signInForm.value as AuthRequestInterface)
      .subscribe((res) => console.log(res));
  }
}
