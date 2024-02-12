import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import Container from 'components/commons/Container';
import CounterGroup from 'components/commons/CounterGroup';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';
import { IPortfolio } from 'types/portfolio';
import PortfolioContainer from 'containers/PortfolioContainer';
import Link from 'next/link';
import PortfolioCard from 'components/pages/portfolio/PortfolioCard';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    portfolioItems: IPortfolio[];
}

const FeaturedSection: React.FC<IProps> = ({
                                               title, portfolioItems, className, children,
                                               ...props
                                           }) => {
    return (
        <section className={cn(styles.featuredSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <Title className={styles.title}
                       as={'h2'}
                       size={'medium'}
                >
                    {title}
                </Title>
                <div className={styles.buttonContainer}>
                    <Link href={'/portfolio'}>
                        <Button variant={'primary'}
                                iconName={IconName.Arrow}
                        >
                            See All
                        </Button>
                    </Link>
                </div>
                <CounterGroup className={styles.counterGroup}>
                    <PortfolioContainer className={styles.portfolioContainer} items={portfolioItems}
                                        render={(item) => (
                                            <Link href={`/portfolio`}
                                                  key={item._id}
                                            >
                                                <PortfolioCard {...item}
                                                               description={'View Projects'}
                                                               enableCounter
                                                />
                                            </Link>
                                        )}
                    />
                </CounterGroup>
            </Container>
        </section>
    );
};

export default FeaturedSection;
