import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraphy';
import ResponsiveImage from 'components/commons/ResponsiveImage';
import { COLORS } from 'styles/colors';
import { ImageSrcSet } from 'types/image';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    thumbnail: ImageSrcSet;
    title: string;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    description: string;
}

const PortfolioCard: React.FC<IProps> = ({
                                             thumbnail, title, titleAs = 'h2', description,
                                             className, children, ...props
                                         }) => {
    return (
        <div className={cn(styles.portfolioCard, className)}
             {...props}
        >
            <ResponsiveImage srcSet={thumbnail}
                             alt={''}
                             fill
            />
            <div className={styles.overlay}>
                <Title as={titleAs}
                       size={'small'}
                       color={COLORS.WHITE}
                >
                    {title}
                </Title>
                <Paragraph color={COLORS.WHITE}
                           opacity={0.75}
                >
                    {description}
                </Paragraph>
            </div>
        </div>
    );
};

export default PortfolioCard;
