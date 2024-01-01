import type { Meta, StoryObj } from '@storybook/react';

import IntroSection from './index';

const meta: Meta<typeof IntroSection> = {
    title: 'Components/pages/about/IntroSection',
    component: IntroSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof IntroSection>;

export const Default: Story = {
    args: {
        thumbnail: '/img/about/desktop/image-heritage.jpg',
        title: 'Our \nHeritage',
        description: `Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.

                    Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.

                    Our small team of world-class professionals provides input on every project.`,
    },
};
