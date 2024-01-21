import React, { HTMLAttributes } from 'react';
import ContactForm, { ContactFormSubmit } from 'components/forms/ContactForm';
import { FormProvider, useForm } from 'react-hook-form';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const ContactFormContainer: React.FC<IProps> = ({ children, ...props }) => {
    const methods = useForm<ContactFormSubmit>();

    const onSubmit = (data: ContactFormSubmit) => {
        alert('Thank you for your message!');
        methods.reset();
    };

    return (
        <div {...props}>
            <FormProvider {...methods}>
                <ContactForm onSubmit={onSubmit} />
            </FormProvider>
        </div>
    );
};

export default ContactFormContainer;
