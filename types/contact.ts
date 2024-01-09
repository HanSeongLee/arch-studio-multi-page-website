export type IContactDetails = {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    location?: {
        _type: 'geopoint';
        lat: number;
        lng: number;
        alt: number;
    }
};
