

export interface ICourse {
  id: string;
  course_name: string;
  course_fee: string;
  country: string;
  level_name: string;
  uni_logo: string;
  university: string;
}

export interface ICourseResponse {
  current_page: number;
  data: {
    data: ICourse[];
  };
}
