import { Component } from '@angular/core';

interface UserInfoInterface {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'cs-r-auth-form',
  templateUrl: './r-form.component.html',
})
export class ReactiveAuthFormComponent {
  title = 'Lets Go';
  userInfo: UserInfoInterface = {
    firstName: '',
    lastName: '',
  };
}
