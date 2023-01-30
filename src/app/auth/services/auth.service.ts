import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments.prod';
import { map, Observable } from 'rxjs';

interface LoginRequestInterface {
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

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: LoginRequestInterface): Observable<UserInterface> {
    return this.http
      .post<LoginRequestInterface>(
        environments.baseUrl + 'authentication/login',
        data
      )
      .pipe(map((response: any) => response.data));
  }
}
