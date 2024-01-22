import type { Meta, StoryObj } from '@storybook/react';

import ContactFormSection from './index';

const meta: Meta<typeof ContactFormSection> = {
    title: 'Components/pages/contact/ContactFormSection',
    component: ContactFormSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ContactFormSection>;

export const Default: Story = {
    args: {
        title: 'Connect\n' +
            'with us',
    },
};
