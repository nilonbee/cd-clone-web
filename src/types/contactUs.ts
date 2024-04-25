export interface IOpeningTime {
    text: string;
    icon?: JSX.Element;
}

export interface IListItem {
    label: string;
    value: string;
}


export interface ILocationInfo {
    phoneNumber?: string;
    email?: string;
    address?: string;
    openingTimes: IOpeningTime[];
    listItems?: IListItem[];
}

export interface IContactInfo {
    kandy: ILocationInfo;
    london: ILocationInfo;
    dubai: ILocationInfo;
    colombo: ILocationInfo;
}
