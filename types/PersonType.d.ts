export type Person = {
    name: string;
    available: AvailableInfo;
    location: LocationInfo;
}

export type AvailableInfo = {
    firstName: string;
    familyName: string;
    city: string;
    familyMembers: string[];
    fromOrg: Boolean;
    org: string;
    status: string;
}

export type LocationInfo = {
    city: string;
    country: string;
    ip: string;
    latitude: string;
    longitude: string;
    region: string;
    timezone: string;
}