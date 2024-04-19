export interface IScholarshipRequest {
  page: number;
  pageSize: number;
  status: string;
  country_id?: string;
  uni_id?: string;
}
