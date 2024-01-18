import type { Meta, StoryObj } from '@storybook/react';

import LeaderSection from './index';

const meta: Meta<typeof LeaderSection> = {
    title: 'Components/pages/about/LeaderSection',
    component: LeaderSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof LeaderSection>;

export const Default: Story = {
    args: {
        title: 'The \nLeaders',
        socialCardItems: [
            {
                _id: '1',
                avatar: '/img/about/desktop/avatar-jake.jpg',
                name: 'Jake Richards',
                affiliation: 'Chief Architect',
                socials: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com',
                },
            },
            {
                _id: '2',
                avatar: '/img/about/desktop/avatar-jake.jpg',
                name: 'Jake Richards',
                affiliation: 'Chief Architect',
                socials: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com',
                },
            },
            {
                _id: '3',
                avatar: '/img/about/desktop/avatar-jake.jpg',
                name: 'Jake Richards',
                affiliation: 'Chief Architect',
                socials: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com',
                },
            },
            {
                _id: '4',
                avatar: '/img/about/desktop/avatar-jake.jpg',
                name: 'Jake Richards',
                affiliation: 'Chief Architect',
                socials: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com',
                },
            }
        ],
    },
};
