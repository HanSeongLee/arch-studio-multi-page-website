import type { Meta, StoryObj } from '@storybook/react';

import PortfolioCard from './index';

const meta: Meta<typeof PortfolioCard> = {
    title: 'Components/pages/portfolio/PortfolioCard',
    component: PortfolioCard,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof PortfolioCard>;

export const Default: Story = {
    args: {
        thumbnail: {
            mobile: '/img/portfolio/mobile/image-seraph.jpg',
            tablet: '/img/portfolio/tablet/image-seraph.jpg',
            desktop: '/img/portfolio/desktop/image-seraph.jpg',
        },
        title: 'Seraph Station',
        description: 'September 2019',
    },
};

export const Counter: Story = {
    args: {
        thumbnail: {
            mobile: '/img/portfolio/mobile/image-seraph.jpg',
            tablet: '/img/portfolio/tablet/image-seraph.jpg',
            desktop: '/img/portfolio/desktop/image-seraph.jpg',
        },
        title: 'Seraph Station',
        description: 'September 2019',
    },
};
