import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
    title: 'Components/commons/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        type: 'text',
        placeholder: 'Name',
    },
};

export const Error: Story = {
    args: {
        type: 'text',
        placeholder: 'Name',
        error: 'Can’t be empty',
    },
};
