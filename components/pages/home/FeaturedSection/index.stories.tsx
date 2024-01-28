import type { Meta, StoryObj } from '@storybook/react';

import FeaturedSection from './index';

const meta: Meta<typeof FeaturedSection> = {
    title: 'Components/pages/home/FeaturedSection',
    component: FeaturedSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof FeaturedSection>;

export const Default: Story = {
    args: {
        title: 'Featured',
        portfolioItems: [
            {
                _id: '1',
                thumbnail: {
                    alt: '',
                    mobile: '/img/portfolio/mobile/image-del-sol.jpg',
                    tablet: '/img/portfolio/tablet/image-del-sol.jpg',
                    desktop: '/img/portfolio/desktop/image-del-sol.jpg',
                },
                title: 'Project Del Sol',
                date: '',
            },
            {
                _id: '2',
                thumbnail: {
                    alt: '',
                    mobile: '/img/portfolio/mobile/image-228b.jpg',
                    tablet: '/img/portfolio/tablet/image-228b.jpg',
                    desktop: '/img/portfolio/desktop/image-228b.jpg',
                },
                title: '228B Tower',
                date: '',
            },
            {
                _id: '3',
                thumbnail: {
                    alt: '',
                    mobile: '/img/portfolio/mobile/image-prototype.jpg',
                    tablet: '/img/portfolio/tablet/image-prototype.jpg',
                    desktop: '/img/portfolio/desktop/image-prototype.jpg',
                },
                title: 'Le Prototype',
                date: '',
            },
        ],
    },
};
