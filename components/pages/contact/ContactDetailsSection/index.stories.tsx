import type { Meta, StoryObj } from '@storybook/react';

import ContactDetailsSection from './index';

const meta: Meta<typeof ContactDetailsSection> = {
    title: 'Components/pages/contact/ContactDetailsSection',
    component: ContactDetailsSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ContactDetailsSection>;

export const Default: Story = {
    args: {
        contactDetailsItems: [
            {
                name: 'Main Office',
                email: 'archone@mail.com',
                address: '1892  Chenoweth Drive TN',
                phone: '123-456-3451',
            },
            {
                name: 'Office II',
                email: 'archtwo@mail.com',
                address: '3399  Wines Lane TX',
                phone: '832-123-4321',
            }
        ]
    },
};
