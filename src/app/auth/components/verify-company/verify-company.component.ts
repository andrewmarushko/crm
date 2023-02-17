import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-verify-company',
  templateUrl: './verify-company.component.html',
  styleUrls: ['./verify-company.component.scss'],
})
export class VerifyCompanyComponent {
  constructor(private fb: FormBuilder) {}

  verifyCompanyForm = this.fb.group({
    company_name: '',
  });
  onSubmitForm() {
    console.log(this.verifyCompanyForm.value);
  }
}
