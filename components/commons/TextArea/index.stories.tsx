import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './index';

const meta: Meta<typeof TextArea> = {
    title: 'Components/commons/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        label: 'Message',
        labelHidden: true,
        placeholder: 'Message',
    },
};

export const Error: Story = {
    args: {
        label: 'Message',
        labelHidden: true,
        placeholder: 'Message',
        error: 'Can’t be empty',
    },
};
