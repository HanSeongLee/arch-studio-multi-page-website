import type { Meta, StoryObj } from '@storybook/react';

import HeroSection from './index';

const meta: Meta<typeof HeroSection> = {
    title: 'Components/pages/commons/HeroSection',
    component: HeroSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
    args: {
        thumbnail: {
            mobile: '/img/about/mobile/image-hero.jpg',
            tablet: '/img/about/tablet/image-hero.jpg',
            desktop: '/img/about/desktop/image-hero.jpg',
        },
        subtitle: 'About',
        title: 'Your team of professionals',
        description: 'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.',
    },
};
