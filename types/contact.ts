export interface IContactDetails {
    _id?: string;
    name: string;
    mail: string;
    phone: string;
    address: string;
    location: {
        _type: 'geopoint';
        lat: number;
        lng: number;
        alt?: number;
    }
}
