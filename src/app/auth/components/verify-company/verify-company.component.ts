import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@auth/services/auth/auth.service';

@Component({
  selector: 'app-verify-company',
  templateUrl: './verify-company.component.html',
  styleUrls: ['./verify-company.component.scss'],
})
export class VerifyCompanyComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  verifyCompanyForm = this.fb.group({
    company_name: '',
  });
  onSubmitForm() {
    this.authService.verifyCompany(
      this.verifyCompanyForm.value.company_name as any
    );
  }
}
