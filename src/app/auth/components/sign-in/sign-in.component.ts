import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first, Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

interface LoginFormInterface {
  email: string;
  password: string;
}

interface UserInterface {
  id: number;
  description?: any;
  isArchived: boolean;
  createDateTime: Date;
  lastChangedDateTime: Date;
  name: string;
  second_name: string;
  avatar_url?: any;
  organization_id: string;
  password: string;
  phone: string;
  email: string;
  currentHashedRefreshToken: string;
  restorePasswordToken?: any;
  role: string;
  organization: {
    id: number;
    description?: any;
    isArchived: boolean;
    createDateTime: Date;
    lastChangedDateTime: Date;
    company_name: string;
    wallet_id: string;
    wallet_secret_id: string;
    organization_id: string;
  };
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private authService: AuthService) {}

  title = 'Sign In';

  user$!: Observable<UserInterface>;
  loginForm: LoginFormInterface = {
    email: '',
    password: '',
  };

  login(form: NgForm) {
    this.user$ = this.authService.login(form.value);
    console.log(this.user$);
  }
}
