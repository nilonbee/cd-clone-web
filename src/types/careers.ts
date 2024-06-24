export interface ICareer {
  id?: number;
  title?: string;
  slug?: string;
  description?: string;
  end_date?: string;
  received_email?: string;
  tags?: string;
  created_at?: string;
  created_by?: number;
  updated_at?: string;
  status?: number;
  country_code?: string;
}

export interface IResponseData {
  current_page: number;
  data: ICareer[];
  next_page_url: null;
  path: string;
  per_page: string;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface IApiResponse {
  status: string;
  message: string;
  data: IResponseData;
}

export interface ICareerApplicationRequest {
  slug?: string;
  resume?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}
