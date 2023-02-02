import { BehaviorSubject } from 'rxjs';

export class AppService {
  theme = new BehaviorSubject<string>('light');

  setCurrentTheme(value: string) {
    return this.theme.next(value);
  }

  getCurrentTheme() {
    return this.theme;
  }
}
