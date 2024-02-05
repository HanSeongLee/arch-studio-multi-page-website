import type { Meta, StoryObj } from '@storybook/react';

import WelcomeSection from './index';

const meta: Meta<typeof WelcomeSection> = {
    title: 'Components/pages/home/WelcomeSection',
    component: WelcomeSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof WelcomeSection>;

export const Default: Story = {
    args: {
        subtitle: 'Welcome',
        title: 'Welcome to \nArch Studio',
        description: 'We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.\n' +
            '\n' +
            'Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.\n' +
            '\n' +
            'We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.',
        thumbnail: '/img/home/desktop/image-welcome.jpg',
    },
};
