import type { Meta, StoryObj } from '@storybook/react';

import Menu from './index';

const meta: Meta<typeof Menu> = {
    title: 'Components/commons/Menu',
    component: Menu,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    args: {},
};
