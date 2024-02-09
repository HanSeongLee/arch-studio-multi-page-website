import { InferGetStaticPropsType } from 'next';
import Layout from 'components/commons/Layout';
import React from 'react';
import { TITLE_TEMPLATE } from 'config/next-seo.config';
import { NextSeo } from 'next-seo';
import SectionContainer from 'containers/SectionContainer';
import { IPage } from 'types/page';
import { fetchPage } from 'lib/sanity/queries/page';

const Home = ({ pageInfo }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
    const pageInfo: IPage = await fetchPage('/');
    return {
        props: {
            pageInfo,
        },
    };
};

export default Home
