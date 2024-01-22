import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import ContactFormContainer from 'containers/ContactFormContainer';
import Container from 'components/commons/Container';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
}

const ContactFormSection: React.FC<IProps> = ({ title, className, children, ...props }) => {
    return (
        <section className={cn(styles.contactFormSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <Title className={styles.title}
                       as={'h2'}
                       size={'medium'}
                >
                    {title}
                </Title>
                <ContactFormContainer className={styles.contactFormContainer} />
            </Container>
        </section>
    );
};

export default ContactFormSection;
