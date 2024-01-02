import { ImageSrc } from 'types/image';

export interface ISocialCard {
    _id: string;
    avatar: ImageSrc;
    name: string;
    affiliation: string;
    socials: {
        linkedin?: string;
        twitter?: string;
    };
}
