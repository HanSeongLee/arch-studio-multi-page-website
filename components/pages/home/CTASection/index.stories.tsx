import type { Meta, StoryObj } from '@storybook/react';

import CTASection from './index';

const meta: Meta<typeof CTASection> = {
    title: 'Components/pages/home/CTASection',
    component: CTASection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof CTASection>;

export const Default: Story = {
    args: {
        thumbnail: {
            mobile: '/img/home/mobile/image-small-team.jpg',
            tablet: '/img/home/tablet/image-small-team.jpg',
            desktop: '/img/home/desktop/image-small-team.jpg',
        },
        title: 'Small team, \n' +
            'big ideas',
        ctaButton: {
            url: '/about',
            text: 'About Us',
        },
    },
};
