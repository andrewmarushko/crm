import { Injectable } from '@angular/core';
import {
  CurrentUserInterface,
  initialState,
} from '@shared/interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  private data = new BehaviorSubject<CurrentUserInterface>(initialState);
  user$: Observable<CurrentUserInterface> = this.data.asObservable();

  constructor() {}

  setCurrentUser() {
    const user = localStorage.getItem('user');
    const currentUser = JSON.parse(user!) as CurrentUserInterface;
    this.data.next(currentUser);
  }
}
