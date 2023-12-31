import { Image } from '@sanity/types/src/assets/types';

export type ImageSrc = string | Image;

export type ImageSrcSet = {
    mobile: ImageSrc;
    tablet: ImageSrc;
    desktop: ImageSrc;
};
