import { ErrorHandler, Injectable, NgZone } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private zone: NgZone) {}

  handleError(error: unknown): void {
    this.zone.run(() => {
      console.warn(error);
    });
  }
}
