import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CurrentUserInterface {
  id: number;
  description?: string | null;
  isArchived: boolean;
  createDateTime: Date;
  lastChangedDateTime: Date;
  name?: string | null;
  second_name?: string | null;
  avatar_url?: string | null;
  organization_id: string;
  password: string;
  phone?: string | null;
  email: string;
  currentHashedRefreshToken?: string | null;
  restorePasswordToken?: string | null;
  role: string;
  organization: {
    id: number;
    description?: string | null;
    isArchived: boolean;
    createDateTime: Date;
    lastChangedDateTime: Date;
    company_name: string;
    wallet_id?: string | null;
    wallet_secret_id?: string | null;
    organization_id: string;
  };
}

const initialState: CurrentUserInterface = {
  id: 1,
  description: null,
  isArchived: false,
  createDateTime: new Date(),
  lastChangedDateTime: new Date(),
  name: null,
  second_name: null,
  avatar_url: null,
  organization_id: '',
  password: '',
  phone: null,
  email: '',
  currentHashedRefreshToken: null,
  restorePasswordToken: null,
  role: '',
  organization: {
    id: 1,
    description: null,
    isArchived: false,
    createDateTime: new Date(),
    lastChangedDateTime: new Date(),
    company_name: '',
    wallet_id: null,
    wallet_secret_id: null,
    organization_id: '',
  },
};

@Injectable()
export class UserService {
  private data = new BehaviorSubject<CurrentUserInterface>(initialState);
  user$: Observable<CurrentUserInterface> = this.data.asObservable();

  constructor(private router: Router) {}

  setCurrentUser(user: CurrentUserInterface) {
    this.data.next(user);
    this.router.navigate(['/invoice']);
  }
}
