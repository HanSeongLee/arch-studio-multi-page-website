import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { ImageProps } from 'next/image';
import { ImageSrcSet } from 'types/image';
import Image from 'components/commons/Image';

interface IProps extends Omit<ImageProps, 'src' | 'objectFit'> {
    srcSet: ImageSrcSet;
    objectFit?: 'cover' | 'contain';
}

const ResponsiveImage: React.FC<IProps> = ({ srcSet, className, ...props }) => {
    return (
        <>
            <Image className={cn(
                styles.image,
                styles.mobile,
                className
            )}
                   src={srcSet.mobile}
                   {...props}
            />
            <Image className={cn(
                styles.image,
                styles.tablet,
                className
            )}
                   src={srcSet.tablet}
                   {...props}
            />
            <Image className={cn(
                styles.image,
                styles.desktop,
                className
            )}
                   src={srcSet.desktop}
                   {...props}
            />
        </>
    );
};

export default ResponsiveImage;
