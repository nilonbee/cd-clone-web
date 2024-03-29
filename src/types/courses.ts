import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ICourse {
  id?: string;
  course_name?: string;
  course_fee?: string;
  country?: string;
  level_name?: string;
  uni_logo?: string | StaticImport;
  university?: string;
  uni_address?: string;
  course_fee_additional?: string;
  created_at?: string;
  currency?: string;
  logo?: string;
  rating?: number | undefined;
  entry_requirements?: string;
}

export interface ICourseResponse {
  current_page: number;
  data: {
    data: ICourse[];
  };
}

export interface ICourseRequest {
  page: number;
  limit: number;
  max_fee: number;
  min_fee: number;
  country_id?: number;
  country_name?: string;
  course_level_id?: number;
  course_level_name?: string;
  course_name?: string;
  intake_month_id?: number;
  intake_month_name?: string;
  subject_id?: string;
  subject_name?: string;
  uni_id?: string;
  uni_name?: string;
}
