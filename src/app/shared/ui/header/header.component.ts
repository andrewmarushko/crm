import { Component, OnInit } from '@angular/core';
import { CurrentUserInterface } from '@shared/interfaces/user.interface';
import { UserService } from '@shared/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<CurrentUserInterface>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.setCurrentUser();
    this.user$ = this.userService.user$;
  }
}
