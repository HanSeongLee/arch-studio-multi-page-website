import type { Meta, StoryObj } from '@storybook/react';

import ContactDetailsCard from './index';

const meta: Meta<typeof ContactDetailsCard> = {
    title: 'Components/pages/contact/ContactDetailsCard',
    component: ContactDetailsCard,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ContactDetailsCard>;

export const Default: Story = {
    args: {
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
};
