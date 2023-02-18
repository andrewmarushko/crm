export interface CurrentUserInterface {
  id: number;
  description?: string | null;
  isArchived: boolean;
  createDateTime: Date;
  lastChangedDateTime: Date;
  name?: string | null;
  second_name?: string | null;
  avatar_url?: string | null;
  organization_id: string;
  password: string;
  phone?: string | null;
  corporate_email: string;
  currentHashedRefreshToken?: string | null;
  restorePasswordToken?: string | null;
  role: string;
  organization: {
    id: number;
    description?: string | null;
    isArchived: boolean;
    createDateTime: Date;
    lastChangedDateTime: Date;
    company_name: string;
    wallet_id?: string | null;
    wallet_secret_id?: string | null;
    organization_id: string;
  };
}

export const initialState: CurrentUserInterface = {
  id: 1,
  description: '',
  isArchived: false,
  createDateTime: new Date(),
  lastChangedDateTime: new Date(),
  name: '',
  second_name: '',
  avatar_url: '',
  organization_id: '',
  password: '',
  phone: '',
  corporate_email: '',
  currentHashedRefreshToken: '',
  restorePasswordToken: '',
  role: '',
  organization: {
    id: 1,
    description: '',
    isArchived: false,
    createDateTime: new Date(),
    lastChangedDateTime: new Date(),
    company_name: '',
    wallet_id: '',
    wallet_secret_id: '',
    organization_id: '',
  },
};
