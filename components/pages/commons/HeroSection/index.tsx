import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraphy';
import ResponsiveImage from 'components/commons/ResponsiveImage';
import { ImageSrcSet } from 'types/image';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    thumbnail: ImageSrcSet;
    subtitle: string;
    title: string;
    description: string;
}

const HeroSection: React.FC<IProps> = ({
                                           thumbnail, subtitle, title, description, className,
                                           children, ...props
                                       }) => {
    return (
        <section className={cn(styles.introSection, className)}
                 {...props}
        >
            <div className={styles.heroImageWrapper}>
                <ResponsiveImage srcSet={thumbnail}
                                 alt={''}
                                 fill
                />
            </div>
            <div className={styles.content}>
                <Title className={styles.subtitle}
                       as={'div'}
                       size={'xlarge'}
                >
                    {subtitle}
                </Title>
                <Title className={styles.title}
                       as={'h2'}
                       size={'medium'}
                >
                    {title}
                </Title>
                <Paragraph>
                    {description}
                </Paragraph>
            </div>
        </section>
    );
};

export default HeroSection;
