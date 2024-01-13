import { Image } from '@sanity/types/src/assets/types';

export type ResponsiveThumbnail = {
    alt: string;
    mobile: string | Image;
    tablet: string | Image;
    desktop: string | Image;
};
