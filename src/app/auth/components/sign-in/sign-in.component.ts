import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '@auth/services/auth/auth.service';
import { AuthRequestInterface } from '@auth/types/auth.interface';

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
