import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface UserInterface {
  username: string;
}

@Injectable()
export class UserService {
  user = new BehaviorSubject<UserInterface>({
    username: '',
  });

  setUser(user: UserInterface) {
    this.user.next(user);
  }
}
