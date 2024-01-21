import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Input from 'components/commons/Input';
import TextArea from 'components/commons/TextArea';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';
import { useFormContext } from 'react-hook-form';

export type ContactFormSubmit = {
    name: string;
    email: string;
    message: string;
};

interface IProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit(data: ContactFormSubmit): void;
}

const ContactForm: React.FC<IProps> = ({ onSubmit, className, children, ...props }) => {
    const { register, handleSubmit, formState: { errors }} = useFormContext<ContactFormSubmit>();

    return (
        <form className={cn(styles.contactForm, className)}
              onSubmit={handleSubmit(onSubmit)}
              {...props}
        >
            <div className={styles.inputContainer}>
                <Input type={'text'}
                       placeholder={'Name'}
                       error={errors.name?.message}
                       {...register('name', {
                            required: 'Can’t be empty',
                       })}
                />
                <Input type={'email'}
                       placeholder={'Email'}
                       error={errors.email?.message}
                       {...register('email', {
                            required: 'Can’t be empty',
                            pattern: {
                                 value: /\S+@\S+\.\S+/,
                                 message: 'Email is invalid',
                            },
                       })}
                />
                <TextArea placeholder={'Message'}
                          error={errors.message?.message}
                          {...register('message', {
                                 required: 'Can’t be empty',
                          })}
                />
            </div>
            <div className={styles.buttonContainer}>
                <Button type={'submit'}
                        variant={'primary'}
                        size={'square'}
                        iconName={IconName.Arrow}
                />
            </div>
        </form>
    );
};

export default ContactForm;
