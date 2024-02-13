import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Title from 'components/commons/Typography/Title';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';
import ResponsiveImage from 'components/commons/ResponsiveImage';
import { COLORS } from 'styles/colors';
import Link from 'next/link';
import { ImageSrcSet } from 'types/image';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    thumbnail: ImageSrcSet;
    title: string;
    ctaButton: {
        url: string;
        text: string;
    };
}

const CTASection: React.FC<IProps> = ({
                                          thumbnail, title, ctaButton, className,
                                          ...props
                                      }) => {
    return (
        <section className={cn(styles.CTASection, className)}
                 {...props}
        >
            <Container className={styles.container}
                       disable={{
                           mobile: true,
                       }}
            >
                <ResponsiveImage srcSet={thumbnail}
                                 alt={''}
                                 fill
                />
                <div className={styles.overlay}>
                    <div className={styles.overlayContainer}>
                        <Title as={'h2'}
                               size={'medium'}
                               color={COLORS.WHITE}
                        >
                            {title}
                        </Title>
                        <div className={styles.buttonContainer}>
                            <Link href={ctaButton.url}
                                  passHref
                            >
                                <Button as={'div'}
                                        variant={'primary'}
                                        iconName={IconName.Arrow}
                                >
                                    {ctaButton.text}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTASection;
