export interface AuthRequestInterface {
  email: string;
  password: string;
}

export interface AuthResponseInterface {
  id: number;
  description?: any;
  isArchived: boolean;
  createDateTime: Date;
  lastChangedDateTime: Date;
  name?: any;
  second_name?: any;
  avatar_url?: any;
  organization_id: string;
  password: string;
  phone?: any;
  email: string;
  currentHashedRefreshToken?: any;
  restorePasswordToken?: any;
  role: string;
  organization: {
    id: number;
    description?: any;
    isArchived: boolean;
    createDateTime: Date;
    lastChangedDateTime: Date;
    company_name: string;
    wallet_id?: any;
    wallet_secret_id?: any;
    organization_id: string;
  };
}

export interface CreateUserRequestInterface {
  name: string;
  second_name: string;
  email: string;
  company_name: string;
  password: string;
}
