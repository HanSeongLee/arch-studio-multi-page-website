import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof Button> = {
    title: 'Components/commons/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        iconName: IconName.Arrow,
        children: 'Primary',
    },
};

export const PrimarySquare: Story = {
    args: {
        variant: 'primary',
        size: 'square',
        iconName: IconName.Arrow,
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        iconName: IconName.Arrow,
        children: 'Secondary',
    },
};

export const Tab: Story = {
    args: {
        variant: 'tab',
        size: 'square',
        children: '01',
    },
};

export const Icon: Story = {
    args: {
        variant: 'icon',
        iconName: IconName.HAMBURGER,
    },
};
