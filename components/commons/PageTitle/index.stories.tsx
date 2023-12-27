import type { Meta, StoryObj } from '@storybook/react';

import PageTitle from './index';

const meta: Meta<typeof PageTitle> = {
    title: 'Components/commons/PageTitle',
    component: PageTitle,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
    args: {
        children: 'Page Title',
    },
};
