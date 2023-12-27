import type { Meta, StoryObj } from '@storybook/react';

import Container from './index';

const meta: Meta<typeof Container> = {
    title: 'Components/commons/Container',
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
    args: {
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
        },
        children: 'Container',
    },
};
