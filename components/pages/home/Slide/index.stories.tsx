import type { Meta, StoryObj } from '@storybook/react';

import Slide from './index';

const meta: Meta<typeof Slide> = {
    title: 'Components/pages/home/Slide',
    component: Slide,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Slide>;

export const Default: Story = {
    args: {
        title: 'Project \nParamour',
        description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
        thumbnail: {
            mobile: '/img/home/mobile/image-hero-paramour.jpg',
            tablet: '/img/home/tablet/image-hero-paramour.jpg',
            desktop: '/img/home/desktop/image-hero-paramour.jpg',
        },
        ctaText: 'See Our Portfolio',
        url: '/portfolio',
    },
};
