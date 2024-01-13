import { ResponsiveThumbnail } from 'types/thumbnail';

export interface IPortfolio {
    _id: string;
    title: string;
    date: string;
    thumbnail: ResponsiveThumbnail;
}
