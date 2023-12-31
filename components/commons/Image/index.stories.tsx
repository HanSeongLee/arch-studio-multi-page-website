import type { Meta, StoryObj } from '@storybook/react';

import Image from './index';

const meta: Meta<typeof Image> = {
    title: 'Components/commons/Image',
    component: Image,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: '/img/about/desktop/image-heritage.jpg',
        width: 540,
        height: 568,
    },
};
