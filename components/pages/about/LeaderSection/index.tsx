import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import Container from 'components/commons/Container';
import SocialCardContainer from 'containers/SocialCardContainer';
import { ISocialCard } from 'types/social-card';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    socialCardItems: ISocialCard[];
}

const LeaderSection: React.FC<IProps> = ({
                                             title, socialCardItems, className, children,
                                             ...props
                                         }) => {
    return (
        <section className={cn(styles.leaderSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <Title className={styles.title}
                       as={'h2'}
                       size={'medium'}
                >
                    {title}
                </Title>

                <SocialCardContainer className={styles.socialCardContainer}
                                     items={socialCardItems}
                />
            </Container>
        </section>
    );
};

export default LeaderSection;
