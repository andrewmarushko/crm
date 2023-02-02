import { BehaviorSubject } from 'rxjs';

export class AppService {
  // theme: string = 'light';
  theme = new BehaviorSubject<string>('light');

  setCurrentTheme(value: string) {
    console.log('thene changed', value);
    return this.theme.next(value);
  }

  getCurrentTheme() {
    return this.theme;
  }
}
