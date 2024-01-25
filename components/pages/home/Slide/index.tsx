import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { ImageSrcSet } from 'types/image';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraphy';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';
import ResponsiveImage from 'components/commons/ResponsiveImage';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    description: string;
    thumbnail: ImageSrcSet;
    ctaText: string;
    url: string;
}

const Slide: React.FC<IProps> = ({
                                     title, titleAs = 'h2', description, thumbnail,
                                     ctaText, url, className, ...props
                                 }) => {
    return (
        <div className={cn(styles.slide, className)}
             {...props}
        >
            <ResponsiveImage srcSet={thumbnail}
                             alt={''}
                             fill
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <Title className={styles.title}
                       as={titleAs}
                       size={'medium'}
                >
                    {title}
                </Title>
                <Paragraph className={styles.description}>
                    {description}
                </Paragraph>
                <div className={styles.buttonContainer}>
                    <Button variant={'primary'}
                            iconName={IconName.Arrow}
                    >
                        {ctaText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Slide;
