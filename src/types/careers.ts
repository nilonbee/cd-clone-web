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
}

export interface IApiResponse {
  status: string;
  message: string;
  data: IResponseData;
}
