import type { Meta, StoryObj } from '@storybook/react';

import ContactForm from './index';
import { FormProvider, useForm } from 'react-hook-form';

const meta: Meta<typeof ContactForm> = {
    title: 'Components/forms/ContactForm',
    component: ContactForm,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
    decorators: [
        (Story) => {
            const methods = useForm();
            return (
                <FormProvider {...methods}>
                    <Story />
                </FormProvider>
            );
        },
    ],
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
    args: {
    },
};
