import type { Meta, StoryObj } from '@storybook/react';

import Title from './index';
import { COLORS } from 'styles/colors';

const meta: Meta<typeof Title> = {
    title: 'Components/commons/Typography/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const XLarge: Story = {
    args: {
        as: 'h1',
        size: 'xlarge',
        children: 'Aa',
    },
};

export const Large: Story = {
    args: {
        as: 'h2',
        size: 'large',
        color: COLORS.VERY_DARK_BLUE,
        children: 'Lorem Ipsum',
    },
};

export const Medium: Story = {
    args: {
        as: 'h3',
        size: 'medium',
        children: 'Dolor Sit',
    },
};

export const Small: Story = {
    args: {
        as: 'h4',
        size: 'small',
        color: COLORS.VERY_DARK_BLUE,
        children: 'Amet Adipiscing',
    },
};
