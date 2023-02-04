import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserInterface {
  email: string;
  description?: string | null;
  name?: string | null;
  second_name?: string | null;
  avatar_url?: string | null;
  phone?: string | null;
  id: number;
  isArchived: boolean;
  createDateTime: Date;
  lastChangedDateTime: Date;
}

const initialState: UserInterface = {
  email: 'test@gmail.com',
  description: null,
  name: null,
  second_name: null,
  avatar_url: null,
  phone: null,
  id: 1,
  isArchived: false,
  createDateTime: new Date(),
  lastChangedDateTime: new Date(),
};

@Injectable()
export class UserService {
  private data = new BehaviorSubject<UserInterface>(initialState);
  user$: Observable<UserInterface> = this.data.asObservable();

  setUser(user: UserInterface) {
    this.data.next(user);
  }
}
