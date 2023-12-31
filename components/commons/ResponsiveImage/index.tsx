import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import { urlForImage } from 'lib/sanity/lib/image';
import { ImageSrcSet } from 'types/image';

interface IProps extends Omit<ImageProps, 'src'> {
    srcSet: ImageSrcSet;
}

const ResponsiveImage: React.FC<IProps> = ({ srcSet, className, ...props }) => {
    return (
        <>
            <Image className={cn(
                styles.image,
                styles.mobile,
                className
            )}
                   src={typeof srcSet.mobile === 'object' ? urlForImage(srcSet.mobile) : srcSet.mobile}
                   {...props}
            />
            <Image className={cn(
                styles.image,
                styles.tablet,
                className
            )}
                   src={typeof srcSet.tablet === 'object' ? urlForImage(srcSet.tablet) : srcSet.tablet}
                   {...props}
            />
            <Image className={cn(
                styles.image,
                styles.desktop,
                className
            )}
                   src={typeof srcSet.desktop === 'object' ? urlForImage(srcSet.desktop) : srcSet.desktop}
                   {...props}
            />
        </>
    );
};

export default ResponsiveImage;
