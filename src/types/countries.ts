export interface ICountriesResponse {
  status: string;
  message: string;
  data: ICountry[];
}

export interface ICountriesRequest {
  status: number | string;
}

export type ICountry = {
  id: number;
  sortname: string;
  name: string;
  phonecode: number;
  status: number;
  currency: string;
};
