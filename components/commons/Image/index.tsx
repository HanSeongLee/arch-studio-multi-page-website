import React from 'react';
import cn from 'classnames';
import NextImage, { ImageProps } from 'next/image';
import { urlForImage } from 'lib/sanity/lib/image';
import { ImageSrc } from 'types/image';

interface IProps extends Omit<ImageProps, 'src' | 'objectFit'> {
    src: ImageSrc;
    objectFit?: 'cover' | 'contain';
}

const Image: React.FC<IProps> = ({ src, objectFit = 'cover', className, ...props }) => {
    return (
        <>
            <NextImage className={cn(
                className
            )}
                   src={typeof src === 'object' ? urlForImage(src) : src}
                   style={{
                       objectFit,
                   }}
                   {...props}
            />
        </>
    );
};

export default Image;
