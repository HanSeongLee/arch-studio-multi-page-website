import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraphy';
import { ImageSrc } from 'types/image';
import Image from 'components/commons/Image';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    thumbnail: ImageSrc;
    title: string;
    description: string;
}

const IntroSection: React.FC<IProps> = ({
                                            thumbnail, title, description, className,
                                            children, ...props
                                        }) => {
    return (
        <section className={cn(styles.introSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <div className={styles.content}>
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
                <div className={styles.imageWrapper}>
                    <Image src={thumbnail}
                           alt={''}
                           fill
                    />
                </div>
            </Container>
        </section>
    );
};

export default IntroSection;
