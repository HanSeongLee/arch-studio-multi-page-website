import type { Meta, StoryObj } from '@storybook/react';

import Footer from './index';

const meta: Meta<typeof Footer> = {
    title: 'Components/commons/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {},
};
