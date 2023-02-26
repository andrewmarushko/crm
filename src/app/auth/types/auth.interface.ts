export interface LoginRequest {
  corporate_email: string;
  password: string;
}

export interface VerifyCompanyRequest {
  company_name: string;
}
export interface VerifyCompanyResponse {
  id: number;
  company_id: string;
  status: boolean;
  company_name: string;
}
