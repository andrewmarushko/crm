import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  currentTheme: string;
  themeSubscription: Subscription;

  constructor(private themeService: AppService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService
      .getCurrentTheme()
      .subscribe((theme) => {
        this.currentTheme = theme;
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  onChangeTheme(value: string) {
    this.themeService.setCurrentTheme(value === 'light' ? 'dark' : 'light');
  }
}
