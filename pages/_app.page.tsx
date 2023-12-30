import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import SEO from 'config/next-seo.config';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import { League_Spartan } from 'next/font/google';
import localFont from 'next/font/local';

const LeagueSpartanFont = League_Spartan({
    weight: ['500', '700'],
    subsets: ['latin'],
});

const SpartanFont = localFont({
    src: '../public/fonts/Spartan-Bold.ttf',
    display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <DefaultSeo {...SEO} />
            <style jsx global>{`
                :root {
                  --spartan-font: ${SpartanFont.style.fontFamily};
                  --league-spartan-font: ${LeagueSpartanFont.style.fontFamily};
                }
            `}
            </style>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
