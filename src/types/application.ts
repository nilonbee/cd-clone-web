export interface IApplication {
  enquiry_id: string;
  id: string;
  app_unique_id?: string;
  assigned_to?: string;
  country_name: string;
  course_level_name?: string;
  course_name: string;
  created_at: string;
  uni_logo: string;
  uni_name: string;
  status: string;
  status_color?: string;
  setSelectedId: (id: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  setIsDeleteOpen: (isOpen: boolean) => void;
}

export interface IApplicationRequest {
  course_id: string;
  email: string;
  first_name: string;
  intake_id: number;
  last_name: string;
  middle_name: string;
  phone: string;
}
