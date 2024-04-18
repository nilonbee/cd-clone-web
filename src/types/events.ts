export interface IEvent {
  id: number;
  slug: string;
  title: string;
  description: string;
  cover_url: string;
  dates_n_locations: IDateLocation[];
  map_locations: IMapLocation[];
  application_url: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  created_date: string;
  updated_date: string;
  status: number;
  country_code: string;
  banner_url: string;
  tabs_list: string[]; // Assuming it's an array of strings, adjust if it has a different structure
}
export interface ISingleEventResponse {
  status: string;
  message: string;
  data: {
    event: IEvent;
  };
}

export interface IDateLocation {
  start_date: string;
  end_date: string;
  location_name: string;
}

export interface IMapLocation {
  lat: string;
  lng: string;
  location_name: string;
}

export interface IEventResponse {
  status: string;
  message: string;
  data: IEvent[];
}

export interface IEventResponseTwo {
  status: string;
  message: string;
  data: {
    event: IEvent;
  };
}
