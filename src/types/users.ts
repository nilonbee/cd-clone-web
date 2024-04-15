export type IUserData = {
  id: number;
  full_name: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  address: string;
  dob: string;
  email: string;
  email_verified_at: number;
  gender: string;
  img_url: string;
  marital_status: string;
  phone: string;
  role: string;
  role_id: number;
  status: number;
  created_at: string;
};

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: string;
  message: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  user: IUserData;
}
