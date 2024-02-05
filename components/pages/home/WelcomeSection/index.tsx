import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { ImageSrc } from 'types/image';
import Container from 'components/commons/Container';
import Image from 'components/commons/Image';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraphy';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    subtitle: string;
    title: string;
    description: string;
    thumbnail: ImageSrc;
}

const WelcomeSection: React.FC<IProps> = ({
                                              subtitle, title, description, thumbnail, className,
                                              children, ...props
                                          }) => {
    return (
        <section className={cn(styles.welcomeSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <Title className={styles.subtitle}
                       as={'div'}
                       size={'xlarge'}
                >
                    {subtitle}
                </Title>
                <div className={styles.content}>
                    <Title as={'h2'}
                           size={'medium'}
                    >
                        {title}
                    </Title>
                    <Paragraph>
                        {description}
                    </Paragraph>
                </div>
                <Image className={styles.thumbnail}
                       src={thumbnail}
                       alt={''}
                       width={350}
                       height={568}
                />
            </Container>
        </section>
    );
};

export default WelcomeSection;
