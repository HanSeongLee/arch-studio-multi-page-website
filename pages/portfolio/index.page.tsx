import type { InferGetStaticPropsType } from 'next'
import styles from './style.module.scss';
import { client } from 'lib/sanity/lib/client';
import groq from 'groq';
import PortfolioContainer from 'containers/PortfolioContainer';
import { IPortfolio } from 'types/portfolio';
import Container from 'components/commons/Container';
import { NextSeo } from 'next-seo';
import { TITLE_TEMPLATE } from 'config/next-seo.config';
import Layout from 'components/commons/Layout';

const PortfolioPage = ({ portfolios }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const title = 'Portfolio';

    return (
        <>
            <NextSeo title={title}
                     titleTemplate={TITLE_TEMPLATE}
            />
            <Layout title={title}>
                <Container>
                    <PortfolioContainer className={styles.portfolioContainer}
                                        items={portfolios}
                    />
                </Container>
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const portfolios: IPortfolio[] = await client.fetch(groq`*[_type == "portfolio"] | order(date desc)`);
    return {
        props: {
            portfolios,
        },
    };
};

export default PortfolioPage;
