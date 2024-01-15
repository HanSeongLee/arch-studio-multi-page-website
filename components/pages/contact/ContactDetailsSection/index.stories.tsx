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
        items: [
            {
                name: 'Main Office',
                mail: 'archone@mail.com',
                address: '1892  Chenoweth Drive TN',
                phone: '123-456-3451',
                location: {
                    _type: 'geopoint',
                    lat: 35.8017288,
                    lng: -88.618196,
                },
            },
            {
                name: 'Office II',
                mail: 'archtwo@mail.com',
                address: '3399  Wines Lane TX',
                phone: '832-123-4321',
                location: {
                    _type: 'geopoint',
                    lat: 33.3328504,
                    lng: -96.1706446,
                },
            }
        ]
    },
};
