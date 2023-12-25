import { DefaultSeoProps } from 'next-seo';

const title = process.env.NEXT_PUBLIC_TITLE || '';
const description = process.env.NEXT_PUBLIC_DESCRIPTION || '';
const url = process.env.NEXT_PUBLIC_URL || '';
const ogi = process.env.NEXT_PUBLIC_OG_IMAGE || '';
const themeColor = process.env.NEXT_PUBLIC_THEME_COLOR || '';

const config: DefaultSeoProps = {
    title,
    description,
    themeColor,
    canonical: url,
    openGraph: {
        title,
        url,
        type: 'website',
        siteName: title,
        images: [
            {
                url: ogi,
            },
        ],
    },
    twitter: {
        cardType: 'summary_large_image',
    },
    additionalMetaTags: [
        {
            property: 'twitter:url',
            content: url,
        },
        {
            property: 'twitter:title',
            content: title,
        },
        {
            property: 'twitter:description',
            content: description,
        },
        {
            property: 'twitter:image',
            content: ogi,
        },
    ],
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.png',
            type: 'image/png',
            sizes: '32x32',
        },
    ],
};

export default config;
