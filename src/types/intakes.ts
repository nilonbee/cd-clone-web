export interface IIntakesResponse {
  status: string;
  message: string;
  data: IIntake[];
}

export interface IIntakesRequest {
  status: number;
}

export type IIntake = {
  id: number;
  months: string;
  status: number;
  created_by: number;
  created_at: string;
};

export type IIntakeYears = {
  id: number;
  year: number;
  status: number;
  created_by: number;
  created_at: string;
};

export interface IIntakeYearsResponse {
  status: string;
  message: string;
  data: IIntakeYears[];
}
