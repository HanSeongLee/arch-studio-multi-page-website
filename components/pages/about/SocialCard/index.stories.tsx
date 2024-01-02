import type { Meta, StoryObj } from '@storybook/react';

import SocialCard from './index';

const meta: Meta<typeof SocialCard> = {
    title: 'Components/pages/about/SocialCard',
    component: SocialCard,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof SocialCard>;

export const Default: Story = {
    args: {
        _id: '1',
        avatar: '/img/about/desktop/avatar-jake.jpg',
        name: 'Jake Richards',
        affiliation: 'Chief Architect',
        socials: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
        },
    },
};
