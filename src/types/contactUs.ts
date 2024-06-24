export interface IContactInfoJson {
  [key: string]: IContactInfoObject;
}

export interface IContactInfoObject {
  phoneNumber: string;
  email: string;
  address: string;
  openingTimes: IOpeningTimes[];
}

export interface IOpeningTimes {
  branch: string;
  times: ITimes[];
}

export interface ITimes {
  text: string;
  icon?: JSX.Element;
}
