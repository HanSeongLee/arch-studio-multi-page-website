import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import SEO from 'config/next-seo.config';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
