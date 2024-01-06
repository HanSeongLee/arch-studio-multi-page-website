import { Image } from '@sanity/types/src/assets/types';

export type Portfolio = {
    _id: string;
    title: string;
    date: string;
    thumbnail: {
        alt: string;
        mobile: string | Image;
        tablet: string | Image;
        desktop: string | Image;
    };
};
