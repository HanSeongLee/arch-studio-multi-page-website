import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo';
import { TITLE_TEMPLATE } from 'config/next-seo.config';
import Layout from 'components/commons/Layout';
import { IPage } from 'types/page';
import SectionContainer from 'containers/SectionContainer';
import { fetchPage } from 'lib/sanity/queries/page';

const AboutPage = ({ pageInfo }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { title, sections } = pageInfo;

    return (
        <>
            <NextSeo title={title}
                     titleTemplate={TITLE_TEMPLATE}
            />
            <Layout title={title}>
                <SectionContainer items={sections} />
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const pageInfo: IPage = await fetchPage('/about');
    return {
        props: {
            pageInfo,
        },
    };
};

export default AboutPage;
