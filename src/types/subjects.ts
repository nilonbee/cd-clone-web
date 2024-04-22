export interface ISubjectsResponse {
  status: string;
  message: string;
  data: ISubject[];
}

export interface ISubjectsRequest {
  status: number;
}

export type ISubject = {
  id: number;
  name: string;
  status: number;
  created_by: number;
  created_at: string;
  cover_image: string;
};
