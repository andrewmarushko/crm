import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordShouldMatch(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get('password');
  const errors = { passwordShouldMatch: { missmatch: true } };

  const confirmPassword = control.get('confirmPassword');

  if (password?.value === confirmPassword?.value) {
    return null;
  }

  confirmPassword?.setErrors(errors);

  return errors;
}
