import { ResponsiveThumbnail } from 'types/thumbnail';

export interface ISlide {
    _id: string;
    title: string;
    description: string;
    thumbnail: ResponsiveThumbnail;
    ctaText: string;
    url: string;
}
