import { Component, OnInit } from '@angular/core';
import { UserInterface, UserService } from '@shared/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<UserInterface>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.user$;
  }
  setUser() {}
}
